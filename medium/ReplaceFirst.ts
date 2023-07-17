// https://github.com/type-challenges/type-challenges/blob/main/questions/25170-medium-replace-first/README.md

type ReplaceFirst<T extends readonly unknown[], S, R> = T extends [infer F, ...infer A] ? F extends S ? [R, ...A] : [F, ...ReplaceFirst<A, S, R>] : T
