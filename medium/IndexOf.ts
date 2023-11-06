// https://github.com/type-challenges/type-challenges/blob/main/questions/05153-medium-indexof/README.md

type IndexOf<T, U extends string | number, I extends any[] = []> =
  T extends [infer L extends string | number, ...infer R]
    ? Equal<L, U> extends true
      ? I["length"]
      : IndexOf<R, U, [...I, 0]>
    : -1;

type Res = IndexOf<[1, 2, 3], 2>; // expected to be 1
type Res1 = IndexOf<[2,6, 3,8,4,1,7, 3,9], 3>; // expected to be 2
type Res2 = IndexOf<[0, 0, 0], 2>; // expected to be -1
