// https://github.com/type-challenges/type-challenges/blob/main/questions/05310-medium-join/README.md

type IsEmpty<T extends any[]> = T extends [any, ...any[]] ? false : true
type IsSingle<T extends any[]> = T extends [any, any, ...any[]] ? false : true
type Join<T extends string[], U extends string | number> = IsEmpty<T> extends true ? "" : IsSingle<T> extends true ? T[0] : T extends [infer F extends string, ...infer S extends string[]] ? `${F}${U}${Join<S, U>}` : never

type Res = Join<["a", "p", "p", "l", "e"], "-">; // expected to be 'a-p-p-l-e'
type Res1 = Join<["Hello", "World"], " ">; // expected to be 'Hello World'
type Res2 = Join<["2", "2", "2"], 1>; // expected to be '21212'
type Res3 = Join<["o"], "u">; // expected to be 'o'
