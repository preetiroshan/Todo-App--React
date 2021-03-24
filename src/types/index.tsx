import { AddTodo } from "../redux/actions";

export interface CompState {
  todos: todoInterface[],
  completed: todoInterface[],
  dispatch?: any 
}
export interface todoInterface {
  task: string,
  id: number,
  action?: string
}
export interface todoItemProps {
  title: string,
  key: number,
  id: number,
  dispatch?: any
}
export interface MyStoreState {
    add_todo_reducer: {
      todos: todoInterface[],
    completed: todoInterface[]
    },
    dispatch?: any 
  }
