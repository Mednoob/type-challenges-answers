// https://github.com/type-challenges/type-challenges/blob/main/questions/00651-hard-length-of-string-2/README.md

type LengthOfString<T extends string, C extends string[] = []> = T extends "" ? C["length"] : T extends `${infer F}${infer S}` ? LengthOfString<S, [...C, F]> : never

type T0 = LengthOfString<"foo"> // 3
