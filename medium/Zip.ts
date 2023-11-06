// https://github.com/type-challenges/type-challenges/blob/main/questions/04471-medium-zip/README.md

type Zip<T, U> = T extends [infer L1, ...infer R1] ? U extends [infer L2, ...infer R2] ? [[L1, L2], ...Zip<R1, R2>] : [] : [];

type exp = Zip<[1, 2], [true, false]> // expected to be [[1, true], [2, false]]
