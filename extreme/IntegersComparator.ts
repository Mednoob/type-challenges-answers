// https://github.com/type-challenges/type-challenges/blob/main/questions/00274-extreme-integers-comparator/README.md

// Pre-load
enum Comparison {
  Greater,
  Equal,
  Lower,
}

// My Types
type StrToNum<S extends string> = S extends `${infer N extends number}` ? N : 0;
type IsNegative<N extends number | bigint> = `${N}` extends `-${string}` ? true : false;
type NLengthArray<N extends number, R extends 0[] = []> = R["length"] extends N ? R : NLengthArray<N, [...R, 0]>;
type StrSplit<A extends string> = A extends `${infer L extends string}${infer R extends string}` ? [L, ...StrSplit<R>] : [];

type FlipCompare<C extends Comparison> = C extends Comparison.Lower ? Comparison.Greater : C extends Comparison.Greater ? Comparison.Lower : Comparison.Equal;
type LengthCompare<A extends any[], B extends any[]>
    = A extends [any, ...infer AR]
        ? B extends [any, ...infer BR]
            ? LengthCompare<AR, BR>
            : Comparison.Greater
        : B["length"] extends 0
            ? Comparison.Equal
            : Comparison.Lower;

// A and B is same length
type LoopAbsoluteCompare<A extends string[], B extends string[]>
    = A extends [infer AL extends string, ...infer AR extends string[]]
        ? B extends [infer BL extends string, ...infer BR extends string[]]
            ? LengthCompare<NLengthArray<StrToNum<AL>>, NLengthArray<StrToNum<BL>>> extends infer C extends Comparison
                ? C extends Comparison.Equal
                    ? LoopAbsoluteCompare<AR, BR>
                    : C
                : never
            : never
        : Comparison.Equal;

type AbsoluteCompare<A extends string[], B extends string[]> = 
    LengthCompare<A, B> extends infer C extends Comparison
        ? C extends Comparison.Equal
            ? LoopAbsoluteCompare<A, B>
            : C
        : never;
type Comparator<A extends number | bigint, B extends number | bigint>
    = IsNegative<A> extends IsNegative<B>
        ? AbsoluteCompare<StrSplit<`${A}`>, StrSplit<`${B}`>> extends infer C extends Comparison
            ? IsNegative<A> extends true
                ? FlipCompare<C>
                : C
            : never
        : IsNegative<A> extends true ? Comparison.Lower : Comparison.Greater;
