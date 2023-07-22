// https://github.com/type-challenges/type-challenges/blob/main/questions/08804-hard-two-sum/README.md

type TupleNLen<N extends number, C extends number[] = []> = C["length"] extends N ? C : TupleNLen<N, [...C, 0]>;
type Search<A extends number[], B extends number[], R extends number> = B extends [infer F extends number, ...infer S extends number[]] ? [...A, ...TupleNLen<F>]["length"] extends R ? true : Search<A, S, R> : false;
type TwoSum<T extends number[], U extends number> = T extends [infer F extends number, ...infer S extends number[]] ? Search<TupleNLen<F>, S, U> extends true ? true : TwoSum<S, U> : false;

type sum1 = TwoSum<[3, 2, 4], 6> // true
type sum2 = TwoSum<[2, 7, 11, 15], 15> // false
