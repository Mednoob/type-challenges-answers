// https://github.com/type-challenges/type-challenges/blob/main/questions/32427-hard-unbox/README.md

type RecHelp<T, D extends number, C extends number[]> = C["length"] extends D ? T : Unbox<T, D, C>;
type Unbox<T, D extends number = 0, C extends number[] = []>
  = T extends Promise<infer P>
    ? RecHelp<P, D, [...C, 0]>
    : T extends () => infer R
      ? RecHelp<R, D, [...C, 0]>
      : T extends (infer A)[]
        ? RecHelp<A, D, [...C, 0]>
        : T extends [infer A]
          ? RecHelp<A, D, [...C, 0]>
          : T;
