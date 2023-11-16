// https://github.com/type-challenges/type-challenges/blob/main/questions/02059-hard-drop-string/README.md

type UnionChars<T extends string> = T extends `${infer A}${infer B}${infer C}` ? A | UnionChars<`${B}${C}`> : T extends `${infer L}${infer _}` ? L : never;
type DropString<S, R extends string> = S extends `${infer F}${infer S}` ? `${F extends UnionChars<R> ? "" : F}${DropString<S, R>}` : "";

type Butterfly = DropString<'foobar!', 'fb'> // 'ooar!'
