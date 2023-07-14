// https://github.com/type-challenges/type-challenges/blob/main/questions/00009-medium-deep-readonly/README.md

type DeepReadonly<T> = { readonly [K in keyof T]: T[K] extends object ? (T[K] extends (...args:any[]) => any ? T[K] : DeepReadonly<T[K]>) : T[K] }

type X = { 
  x: { 
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

type Expected = { 
  readonly x: { 
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey' 
}

type Todo = DeepReadonly<X> // should be same as `Expected`
