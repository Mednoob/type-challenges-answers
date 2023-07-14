// https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.md

type Concat<T extends readonly any[], U extends readonly any[]> = [...T, ...U]

type Result = Concat<[1], [2]> // expected to be [1, 2]
