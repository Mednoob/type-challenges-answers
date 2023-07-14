// https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.md

type MyPick<T, O extends keyof T> = { [K in O]: T[K] };

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
