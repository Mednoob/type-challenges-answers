// https://github.com/type-challenges/type-challenges/blob/main/questions/03062-medium-shift/README.md

type Shift<T extends any[]> = T extends [any, ...infer S] ? S : T;

type Result = Shift<[3, 2, 1]> // [2, 1]
