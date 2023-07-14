// https://github.com/type-challenges/type-challenges/blob/main/questions/00898-easy-includes/README.md
// This one was pretty hard for me, I had to look at the solutions :(

type Includes<T extends readonly any[], U> = T extends [infer F, ...infer S] ? Equal<F, U> extends true ? true : Includes<S, U> : false

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
