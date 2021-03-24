// import { ADD_TODO , DELETE_TODO, DONE_TODO, DELETE_COMPLETED_TODO} from "../constants" 
import * as constants from '../constants'
//define action interfaces
export interface AddTodo {
  type: constants.ADD_TODO_TYPE | constants.DONE_TODO_TYPE;
  task: string;
  id: number
}
export interface DeleteTodo {
  type: constants.DELETE_TODO_TYPE | constants.DELETE_COMPLETED_TODO_TYPE;
  id: number
}

// export type allActions = AddTodo | DeleteTodo 
let idCount = 0
//define actions
export function add_todo_action(task: string): AddTodo {
return {
  type: constants.ADD_TODO,
  task,
  id: ++idCount 
}
};
export function done_todo_action(id: number, task: string): AddTodo {
  return {
    type: constants.DONE_TODO,
    task,
    id 
  }
  };
export function delete_todo_action(id: number): DeleteTodo{
  return {
    type: constants.DELETE_TODO,
    id
   }
};
export function delete_completed_todo_action(id: number): DeleteTodo {
 return {
  type: constants.DELETE_COMPLETED_TODO,
  id
 }
};

// export const add_todo_action = (task) => ({
//   type: ADD_TODO,
//   task,
//   id: ++idCount
// })

// export const delete_todo_action = (id) => ({
//   type: DELETE_TODO,
//   id
// })
// export const delete_completed_todo_action = (id) => ({
//   type: DELETE_COMPLETED_TODO,
//   id
// })
// export const done_todo_action = (id, task) => ({
//   type: DONE_TODO,
//   id,
//   task
// })
