// https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.md

// Recursive type for getting deep promise result
type Rec<T> = T extends Promise<infer P> ? Rec<P> : T;
type MyAwaited<T> = T extends Promise<infer P> ? Rec<P> : error;

type ExampleType = Promise<string>

type Result = MyAwaited<ExampleType> // string
