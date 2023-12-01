// https://github.com/type-challenges/type-challenges/blob/main/questions/21104-medium-findall/README.md

type FindAll<T extends string, P extends string, I extends number[] = []>
  = P extends ""
      ? []
      : T extends `${string}${infer R}`
        ? [...(T extends `${P}${string}` ? [I["length"]] : []), ...FindAll<R, P, [...I, 0]>]
        : [];
