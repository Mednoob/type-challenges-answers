// https://github.com/type-challenges/type-challenges/blob/main/questions/18220-medium-filter/README.md

type IsEmpty<T extends any[]> = T extends [any, ...any[]] ? false : true
type Filter<T extends any[], P> = IsEmpty<T> extends true ? [] : T extends [infer F, ...infer S] ? F extends P ? [F, ...Filter<S, P>] : Filter<S, P> : never
