// https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.md

type MyOmit<T, O extends keyof T> = { [K in Exclude<keyof T, O>]: T[K] }

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}
