// https://github.com/type-challenges/type-challenges/blob/main/questions/30301-medium-isodd/README.md

type LastChar<T extends string> = T extends `${string}${infer L}${infer R}` ? LastChar<`${L}${R}`> : T extends `${infer L}${infer _}` ? L : never;
type IsOdd<T extends number> = LastChar<`${T}`> extends "1" | "3" | "5" | "7" | "9" ? true : false;
