// https://github.com/type-challenges/type-challenges/blob/main/questions/03060-easy-unshift/README.md

type Unshift<T extends any[], U> = [U, ...T]

type Result = Unshift<[1, 2], 0> // [0, 1, 2,]
