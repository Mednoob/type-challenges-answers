// https://github.com/type-challenges/type-challenges/blob/main/questions/00472-hard-tuple-to-enum-object/README.md

type Merge<A, B> = {readonly [K in (keyof A | keyof B)]: K extends keyof A ? A[K] : K extends keyof B ? B[K] : never};
type Enum<T extends readonly string[], N extends boolean = false, A extends any[] = []> =
  T extends readonly [infer L extends string, ...infer R extends string[]]
    ? Merge<Record<Capitalize<L>, N extends false ? L : A["length"]>, Enum<R, N, [...A, 0]>>
    : {};

Enum<["macOS", "Windows", "Linux"]>
// -> { readonly MacOS: "macOS", readonly Windows: "Windows", readonly Linux: "Linux" }

Enum<["macOS", "Windows", "Linux"], true>
// -> { readonly MacOS: 0, readonly Windows: 1, readonly Linux: 2 }
