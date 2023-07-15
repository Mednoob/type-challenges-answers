// https://github.com/type-challenges/type-challenges/blob/main/questions/05117-medium-without/README.md

type IsEmpty<T extends any[]> = T extends [any, ...any[]] ? false : true
type TupleToUnion<T> = T extends any[] ? T[number] : T;
type Without<T extends any[], U> = IsEmpty<T> extends true ? [] : T extends [infer F, ...infer S] ? (F extends TupleToUnion<U> ? Without<S, U> : [F, ...Without<S, U>]) : never

type Res = Without<[1, 2], 1>; // expected to be [2]
type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]>; // expected to be [4, 5]
type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // expected to be []
