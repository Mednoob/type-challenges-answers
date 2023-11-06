// https://github.com/type-challenges/type-challenges/blob/main/questions/04803-medium-trim-right/README.md

type RevStr<T> = T extends `${infer L}${infer S}` ? `${RevStr<S>}${L}` : "";
type Trim<S extends string> = S extends `${infer L}${infer R}` ? L extends " " | "\t" | "\n" ? Trim<R> : S : "";
type TrimRight<S extends string> = RevStr<Trim<RevStr<S>>>;

type Trimed = TrimRight<'   Hello World    '> // expected to be '   Hello World'
