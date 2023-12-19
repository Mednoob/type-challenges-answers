// https://github.com/type-challenges/type-challenges/blob/main/questions/15260-hard-tree-path-array/README.md

type Values<T> = T[keyof T];
type Path<T> = [] | Values<{ [K in keyof T]: [K, ...(T[K] extends string | number ? [] : Path<T[K]>)] }>;
