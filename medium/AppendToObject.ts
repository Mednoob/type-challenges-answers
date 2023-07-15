// https://github.com/type-challenges/type-challenges/blob/main/questions/00527-medium-append-to-object/README.md

type AppendToObject<T, U extends string, V> = { [K in (keyof T | U)]: K extends U ? V : T[K extends keyof T ? K : never] }

type Test = { id: '1' }
type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }

