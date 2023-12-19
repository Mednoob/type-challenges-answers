// https://github.com/type-challenges/type-challenges/blob/main/questions/00545-hard-printf/README.md

type Format<T extends string>
	= T extends `%${infer L}${infer R}`
		? L extends "%"
			? Format<R>
			: L extends "s"
				? ((s1: string) => Format<R>)
				: ((d1: number) => Format<R>)
		: T extends `${string}${infer R}`
			? Format<R>
			: string;

type FormatCase1 = Format<"%sabc"> // FormatCase1 : string => string
type FormatCase2 = Format<"%s%dabc"> // FormatCase2 : string => number => string
type FormatCase3 = Format<"sdabc"> // FormatCase3 :  string
type FormatCase4 = Format<"sd%abc"> // FormatCase4 :  string
