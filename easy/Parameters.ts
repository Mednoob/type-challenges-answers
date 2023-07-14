// https://github.com/type-challenges/type-challenges/blob/main/questions/03312-easy-parameters/README.md

type MyParameters<T extends (...args: any[]) => any> = T extends ((...args: infer T) => any) ? T : never

const foo = (arg1: string, arg2: number): void => {}

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]
