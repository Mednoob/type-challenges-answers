// https://github.com/type-challenges/type-challenges/blob/main/questions/00459-medium-flatten/README.md

type IsEmpty<T> = T extends [any, ...any[]] ? false : true
type Flatten<T extends any[]> = IsEmpty<T> extends true ? [] : (T extends [infer F, ...infer S] ? (F extends any[] ? [...Flatten<F>, ...Flatten<S>] : [F, ...Flatten<S>]) : never)

type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]
