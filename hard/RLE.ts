// https://github.com/type-challenges/type-challenges/blob/main/questions/14188-hard-run-length-encoding/README.md

namespace RLE {
  type P<T extends string[]> = `${T["length"] extends 1 ? "" : T["length"]}${T[0]}`;
  type Repeat<S extends string, N, C extends any[] = []> = C["length"] extends N ? "" : `${S}${Repeat<S, N, [...C, 0]>}`;

  export type Encode<S extends string, T extends string[] = [""]>
    = S extends `${infer L}${infer R}`
      ? L extends T[0]
        ? Encode<R, [...T, L]>
        : `${P<T>}${Encode<R, [L]>}`
      : P<T>;

  export type Decode<S extends string>
    = S extends `${infer N extends number}${infer L}${infer R}`
      ? `${Repeat<L, N>}${Decode<R>}`
      : S extends `${infer L}${infer R}`
        ? `${L}${Decode<R>}`
        : "";
}
