// https://github.com/type-challenges/type-challenges/blob/main/questions/04037-hard-ispalindrome/README.md

type Reverse<S> = S extends `${infer L}${infer R}` ? `${Reverse<R>}${L}` : "";
type IsPalindrome<T extends string | number> = `${T}` extends Reverse<`${T}`> ? true : false;
