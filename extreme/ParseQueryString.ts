// https://github.com/type-challenges/type-challenges/blob/main/questions/00151-extreme-query-string-parser/README.md

type IncludesTuple<A, B>
	= A extends [infer L, ...infer R]
		? L extends B
			? true
			: IncludesTuple<R, B>
		: false;
type Includes<A, B> = A extends any[] ? IncludesTuple<A, B> : A extends B ? true : false;

type ParseStr<T extends string> = T extends `${infer L}=${infer R}` ? [L, R] : [T, true];
type Combine<T extends [string, any], O>
	= {
		[K in (keyof O | T[0])]:
			K extends keyof O & T[0]
				? Includes<O[K], T[1]> extends true
					? O[K]
					: [...(O[K] extends any[] ? O[K] : [O[K]]), T[1]]
				: K extends keyof O ? O[K] : T[1]
	};

type ParseQueryString<T extends string, O = {}>
	= T extends `${infer L}&${infer R}`
		? ParseQueryString<R, Combine<ParseStr<L>, O>>
		: T extends "" ? O : Combine<ParseStr<T>, O>

