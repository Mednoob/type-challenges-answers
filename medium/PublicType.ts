// https://github.com/type-challenges/type-challenges/blob/main/questions/28333-medium-public-type/README.md

type IsFirstUnderscore<T> = T extends `_${string}` ? T : never;
type PublicType<T extends object> = Omit<T, IsFirstUnderscore<keyof T>>;
