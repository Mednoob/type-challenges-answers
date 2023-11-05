// https://github.com/type-challenges/type-challenges/blob/main/questions/09989-medium-tong-ji-shu-zu-zhong-de-yuan-su-ge-shu/README.md

type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;
type CountElementNumberToObject<T, R extends Record<string | number, any[]> = {}> =
  T extends [infer F, ...infer S]
    ? Equal<F, never> extends true
      ? CountElementNumberToObject<S, R>
      : F extends any[]
          ? CountElementNumberToObject<[...F, ...S], R>
          : F extends string | number
            ? CountElementNumberToObject<S, { [K in (keyof R | F)]: K extends F ? F extends keyof R ? [...R[F], 0] : [0] : R[K] }>
            : never
    : { [K in keyof R]: R[K]["length"] };

type Simple1 = CountElementNumberToObject<[]> // return {}
type Simple2 = CountElementNumberToObject<[1,2,3,4,5]> 
// return {
//   1: 1,
//   2: 1,
//   3: 1,
//   4: 1,
//   5: 1
// }

type Simple3 = CountElementNumberToObject<[1,2,3,4,5,[1,2,3]]> 
// return {
//   1: 2,
//   2: 2,
//   3: 2,
//   4: 1,
//   5: 1
// }
