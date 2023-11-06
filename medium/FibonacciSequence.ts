// https://github.com/type-challenges/type-challenges/blob/main/questions/04182-medium-fibonacci-sequence/README.md

type RecFib<T, X extends any[] = [0, 0], A extends any[] = [0], B extends any[] = [0]> = X["length"] extends T ? B["length"] : RecFib<T, [...X, 0], B, [...A, ...B]>;
type Fibonacci<T extends number> = T extends 1 | 2 ? 1 : RecFib<T>;

type Result1 = Fibonacci<3> // 2
type Result2 = Fibonacci<8> // 21
