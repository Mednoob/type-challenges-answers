// https://github.com/type-challenges/type-challenges/blob/main/questions/00847-hard-string-join/README.md

declare function join<D extends string>(delimiter: D): <A extends string[]>(...parts: A) => Join<A, D>;

type Join<A, D extends string>
	= A extends [infer L extends string, infer M, ...infer R]
		? `${L}${D}${Join<[M, ...R], D>}`
		: A extends [string] ? `${A[0]}` : "";

join('#')('a', 'b', 'c') // = 'a#b#c'
join('')('a', 'b', 'c') // = 'abc'
join('-')('a') // = 'a'
