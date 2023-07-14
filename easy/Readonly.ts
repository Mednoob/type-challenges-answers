// https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.md

type MyReadonly<T> = { readonly [K in keyof T]: T[K] }

interface Todo {
  title: string
  description: string
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
