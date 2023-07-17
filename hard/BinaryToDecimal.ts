// https://github.com/type-challenges/type-challenges/blob/main/questions/06141-hard-binary-to-decimal/README.md

type StrChars<T extends string, C extends string[] = []> = T extends "" ? C : T extends `${infer F}${infer S}` ? StrChars<S, [...C, F]> : never

type BinaryToDecimal<S extends string, T extends number = StrChars<S>["length"], C extends number[] = [], A extends number[] = []>
    = A["length"] extends T
        ? C["length"]
        : S extends `${infer F}${infer R}`
            ? BinaryToDecimal<R, T, [...C, ...C, ...(F extends "1" ? [0] : [])], [...A, 0]>
            : never

type Res1 = BinaryToDecimal<'10'>; // expected to be 2
type Res2 = BinaryToDecimal<'0011'>; // expected to be 3
