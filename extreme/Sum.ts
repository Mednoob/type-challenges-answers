// https://github.com/type-challenges/type-challenges/blob/main/questions/00476-extreme-sum/README.md

// ================================ MY TYPES ==========================================
type StrToNum<T>
    = T extends "1"  ?  1 :
      T extends "2"  ?  2 :
      T extends "3"  ?  3 :
      T extends "4"  ?  4 :
      T extends "5"  ?  5 :
      T extends "6"  ?  6 :
      T extends "7"  ?  7 :
      T extends "8"  ?  8 :
      T extends "9"  ?  9 : 0

type IsEmpty<T extends any[]> = T extends [any, ...any[]] ? false : true
type Reverse<T extends any[]> = IsEmpty<T> extends true ? [] : T extends [infer F, ...infer S] ? [...Reverse<S>, F] : never

type Range1ToN<N extends number, A extends number[] = []> = A["length"] extends N ? A : Range1ToN<N, [...A, 0]>
type SimpleSum<A, B> = A extends number ? B extends number ? [...Range1ToN<A>, ...Range1ToN<B>]["length"] : never : never

type StrChars<T extends string, C extends string[] = []> = T extends "" ? C : T extends `${infer F}${infer S}` ? StrChars<S, [...C, F]> : never
type SliceFirst<T extends any[]> = T extends [any, ...infer S] ? S : []
type Rem10<N extends number, R extends number[] = [], C extends number[] = []> = R["length"] extends N ? C["length"] : Rem10<N, [...R, 0], C["length"] extends 9 ? [] : [...C, 0]>
type IsGTE10<N extends number, C extends number[] = []> = C["length"] extends 10 ? true : C["length"] extends N ? false : IsGTE10<N, [...C, 0]>
type IsBothZeroLength<A extends any[], B extends any[]> = A["length"] extends 0 ? B["length"] extends 0 ? true : false : false
type Join<A extends any[], R extends string = ""> = A extends [infer F extends string, ...infer S extends string[]] ? `${R}${F}${Join<S>}` : R

type ActualSum<A extends any[], B extends any[], R extends string = "", M extends boolean = false>
    = IsBothZeroLength<A, B> extends true
        ? M extends true ? `${R}1` : R
        : ActualSum<SliceFirst<A>, SliceFirst<B>, `${R}${Rem10<SimpleSum<SimpleSum<StrToNum<A[0]>, StrToNum<B[0]>>, M extends true ? 1 : 0>>}`, IsGTE10<SimpleSum<SimpleSum<StrToNum<A[0]>, StrToNum<B[0]>>, M extends true ? 1 : 0>>>
type Sum<A extends string | number | bigint, B extends string | number | bigint> = Join<Reverse<StrChars<ActualSum<Reverse<StrChars<`${A}`>>, Reverse<StrChars<`${B}`>>>>>>
// ================================ END OF MY TYPES ===================================

type T0 = Sum<2, 3> // '5'
type T1 = Sum<'13', '21'> // '34'
type T2 = Sum<'328', 7> // '335'
type T3 = Sum<1_000_000_000_000n, '123'> // '1000000000123'
