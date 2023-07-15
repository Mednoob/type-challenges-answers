// https://github.com/type-challenges/type-challenges/blob/main/questions/03196-medium-flip-arguments/README.md

type IsEmpty<T extends any[]> = T extends [any, ...any[]] ? false : true;
type Reverse<T extends any[]> = IsEmpty<T> extends true ? [] : T extends [infer F, ...infer S] ? [...Reverse<S>, F] : never
type FlipArguments<T extends (...args: any[]) => any> = T extends (...args: infer A) => infer R ? (...args: Reverse<A>) => R : never

type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void> 
// (arg0: boolean, arg1: number, arg2: string) => void
