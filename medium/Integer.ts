// https://github.com/type-challenges/type-challenges/blob/main/questions/10969-medium-integer/README.md

type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;
type Integer<T extends number> = Equal<T, number> extends true ? never : `${T}` extends `${number}.${number}` ? never : T;
