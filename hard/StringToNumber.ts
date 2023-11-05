// https://github.com/type-challenges/type-challenges/blob/main/questions/00300-hard-string-to-number/README.md

type ToNumber<S extends string> = S extends `${infer L extends number}` ? L : never;
