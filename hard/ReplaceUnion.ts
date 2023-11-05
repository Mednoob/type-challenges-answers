// https://github.com/type-challenges/type-challenges/blob/main/questions/13580-hard-replace-union/README.md

type UnionReplace<T, U extends [any, any][]> = U extends [infer L, ...infer R extends [any, any][]]
  ? L extends [infer LL, infer LR]
    ? T extends LL
      ? LR
      : UnionReplace<T, R>
    : never
  : T;
