// https://github.com/type-challenges/type-challenges/blob/main/questions/32532-hard-binary-addition/README.md

type Bit = 1 | 0

type FilterZero<T extends Bit[]> = T extends [infer F extends Bit, ...infer S extends Bit[]] ? F extends 0 ? FilterZero<S> : [F, ...FilterZero<S>] : [];

// This only works on same-length A and B
type ActualAdd<A extends Bit[], B extends Bit[]> =
  A extends [infer FA extends Bit, ...infer SA extends Bit[]]
    ? B extends [infer FB extends Bit, ...infer SB extends Bit[]]
      ? ActualAdd<SA, SB> extends [infer Result extends Bit[], infer Carry extends Bit]
        ? FilterZero<[FA, FB, Carry]>["length"] extends infer X extends number
          ? [[X extends 3 ? 1 : X extends 1 ? 1 : 0, ...Result], X extends 2 ? 1 : X extends 3 ? 1 : 0]
          : never
        : never
      : [[], 0]
    : [[], 0];
type BinaryAdd<A extends Bit[], B extends Bit[]> =
  ActualAdd<A, B> extends [infer Result extends Bit[], infer Carry extends Bit]
    ? Carry extends 1
      ? [1, ...Result]
      : Result
    : never;
