// import { CompState, MyStoreState } from "../../types"

const { ADD_TODO, DELETE_TODO, DONE_TODO, DELETE_COMPLETED_TODO } = require("../constants")


interface stateObjectInterface{
  task: string,
  id: number
}
interface withTask {
  type: string,
  task: string ,
  id: number
}
const initialState = {
  todos: [{task: "Code Review", id: 5}],
  // completed: Array<stateObjectInterface>
  completed:  [{task: "Daily Scrum", id: 2}]
}

// interface withoutTask {
//   id: number,
//   type: string
// }


export function add_todo_reducer(state = initialState, action: withTask) {
  switch (action.type){
      case ADD_TODO:{
        return{
          ...state,
          todos: [
            ...state.todos, 
            {
            task: action.task,
            id: action.id


            }
            ]
        }
      }
      case DELETE_TODO:{
        console.log("action is", action)
        console.log("state.todos are" ,  state.todos)
        const a = state.todos.filter((item)=> item.id!==action.id)
        const b = state.completed.filter((item: stateObjectInterface )=> item.id!==action.id)
        console.log(a)
        return{
          ...state,
          todos: a,
          completed:b
        }
      }
      case DELETE_COMPLETED_TODO :{
        console.log("action is", action)
        console.log("state.todos are" ,  state.todos)
        // const a = state.todos.filter((item)=> item.id!==action.id)
        const b = state.completed.filter((item: stateObjectInterface)=> item.id!==action.id)
        console.log(b)
        return{
          ...state,
          completed:b
        }
      }
      
      case DONE_TODO:{
        console.log("action is", action)
        console.log("state.todos are" ,  state.todos)
        const a = state.todos.filter((item)=> item.id!==action.id)
        console.log(a)
        console.log("done_todo called")
        console.log(state)
        console.log("state.completed is" ,  state.completed)

        return{
          ...state,
          todos: a,
          completed: [
            ...state.completed, 
            {
            task: action.task,
            id: action.id
            }
            ]
        }
      }
      default:
        return state  
  }
}
// export function delete_todo_reducer(state= initialState)