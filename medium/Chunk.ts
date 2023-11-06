// https://github.com/type-challenges/type-challenges/blob/main/questions/04499-medium-chunk/README.md

type Chunk<A, X, N extends any[] = [], R extends any[] = []> =
  A extends [infer F, ...infer S]
    ? N["length"] extends X
      ? [R, ...Chunk<S, X, [0], [F]>]
      : Chunk<S, X, [...N, 0], [...R, F]>
    : R["length"] extends 0 ? [] : [R];

type exp1 = Chunk<[1, 2, 3], 2> // expected to be [[1, 2], [3]]
type exp2 = Chunk<[1, 2, 3], 4> // expected to be [[1, 2, 3]]
type exp3 = Chunk<[1, 2, 3], 1> // expected to be [[1], [2], [3]]
