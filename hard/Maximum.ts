// https://github.com/type-challenges/type-challenges/blob/main/questions/09384-hard-maximum/README.md

type SimpleCompare<A extends number[], B extends number[]> = A extends [infer F, ...infer S extends number[]] ? B extends [infer X, ...infer Y extends number[]] ? SimpleCompare<S, Y> : "higher" : B extends [...infer X, infer Y] ? "lower" : "equal";
type ArrayN<N extends number, C extends number[] = []> = C["length"] extends N ? C : ArrayN<N, [...C, 0]>;
type ActualMax<T extends number[], C extends number = 0> = T extends [infer F extends number, ...infer S extends number[]] ? ActualMax<S, SimpleCompare<ArrayN<F>, ArrayN<C>> extends "higher" ? F : C> : C;
type Maximum<T extends number[]> = T extends [any, ...any[]] ? ActualMax<T> : never;

Maximum<[]> // never
Maximum<[0, 2, 1]> // 2
Maximum<[1, 20, 200, 150]> // 200
