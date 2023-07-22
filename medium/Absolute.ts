// https://github.com/type-challenges/type-challenges/blob/main/questions/00529-medium-absolute/README.md

type Absolute<T extends number | string | bigint> = `${T}` extends `${infer F}${infer S}` ? F extends "-" ? S : `${T}` : never;

type Test = -100
type Result = Absolute<Test> // expected to be "100"
