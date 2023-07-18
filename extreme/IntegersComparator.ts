// https://github.com/type-challenges/type-challenges/blob/main/questions/00274-extreme-integers-comparator/README.md

// Pre-load
enum Comparison {
  Greater,
  Equal,
  Lower,
}

// My Types
type StrToNum<T>
    = T extends "1"  ?  1 :
      T extends "2"  ?  2 :
      T extends "3"  ?  3 :
      T extends "4"  ?  4 :
      T extends "5"  ?  5 :
      T extends "6"  ?  6 :
      T extends "7"  ?  7 :
      T extends "8"  ?  8 :
      T extends "9"  ?  9 : 0;

type SimpleCompare<A extends number[], B extends number[]> = A extends [infer F, ...infer S extends number[]] ? B extends [infer X, ...infer Y extends number[]] ? SimpleCompare<S, Y> : "higher" : B extends [...infer X, infer Y] ? "lower" : "equal";
type ArrayN<N extends number, C extends number[] = []> = C["length"] extends N ? C : ArrayN<N, [...C, 0]>;
type IsNegative<T extends number> = `${T}` extends `${infer F}${infer S}` ? F extends "-" ? true : false : false;
type StrChars<T extends string, C extends string[] = []> = T extends "" ? C : T extends `${infer F}${infer S}` ? StrChars<S, [...C, F]> : never;
type ActualCompare<A extends string[], B extends string[], N extends boolean> = A extends [infer F, ...infer S extends string[]] ? B extends [infer X, ...infer Y extends string[]] ? (SimpleCompare<ArrayN<StrToNum<F>>, ArrayN<StrToNum<X>>> extends "equal" ? ActualCompare<S, Y, N> : SimpleCompare<ArrayN<StrToNum<F>>, ArrayN<StrToNum<X>>> extends "lower" ? (N extends true ? Comparison.Greater : Comparison.Lower) : (N extends true ? Comparison.Lower : Comparison.Greater)) : (N extends true ? Comparison.Lower : Comparison.Greater) : B extends [infer X, ...infer Y] ? (N extends true ? Comparison.Greater : Comparison.Lower) : Comparison.Equal;
type Comparator<A extends number, B extends number> = IsNegative<A> extends IsNegative<B> ? ActualCompare<StrChars<`${A}`>, StrChars<`${B}`>, IsNegative<A>> : IsNegative<A> extends true ? Comparison.Lower : Comparison.Greater;


