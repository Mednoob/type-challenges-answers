// https://github.com/type-challenges/type-challenges/blob/main/questions/02059-hard-drop-string/README.md

type Includes<A extends string[], T extends string, I extends number[] = []> = I["length"] extends A["length"] ? false : A[I["length"]] extends T ? true : Includes<A, T, [...I, 0]>
type StrChars<T extends string, C extends string[] = []> = T extends "" ? C : T extends `${infer F}${infer S}` ? StrChars<S, [...C, F]> : never
type Join<A extends any[], R extends string = ""> = A extends [infer F extends string, ...infer S extends string[]] ? `${R}${F}${Join<S>}` : R
type ActualDrop<A extends string[], F extends string[]> = A extends [infer L extends string, ...infer S extends string[]] ? Includes<F, L> extends true ? ActualDrop<S, F> : [L, ...ActualDrop<S, F>] : []
type DropString<S extends string, R extends string> = Join<ActualDrop<StrChars<S>, StrChars<R>>>

type Butterfly = DropString<'foobar!', 'fb'> // 'ooar!'
