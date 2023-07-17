// https://github.com/type-challenges/type-challenges/blob/main/questions/00106-medium-trimleft/README.md

type Includes<A extends string[], T extends string, I extends number[] = []> = I["length"] extends A["length"] ? false : A[I["length"]] extends T ? true : Includes<A, T, [...I, 0]>
type TrimLeft<S extends string> = S extends `${infer F}${infer R}` ? Includes<[" ", "\n", "\t"], F> extends true ? TrimLeft<R> : S : ""

type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '
