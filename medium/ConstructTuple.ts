// https://github.com/type-challenges/type-challenges/blob/main/questions/07544-medium-construct-tuple/README.md

type ConstructTuple<L extends number, A extends unknown[] = []> = A["length"] extends L ? A : ConstructTuple<L, [...A, unknown]>

type result = ConstructTuple<2> // expect to be [unknown, unkonwn]
