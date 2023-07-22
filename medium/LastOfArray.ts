// https://github.com/type-challenges/type-challenges/blob/main/questions/00015-medium-last/README.md

type Last<T extends any[]> = T extends [any, infer F, ...infer S] ? Last<[F, ...S]> : T[0];

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type tail1 = Last<arr1> // expected to be 'c'
type tail2 = Last<arr2> // expected to be 1
