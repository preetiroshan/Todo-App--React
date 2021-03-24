// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Todo App/i);
//   expect(linkElement).toBeInTheDocument();
// });
import * as actions from '../src/redux/actions'
// import * as types from '../src/types'
import '../src/redux/constants'
// import { constants } from 'node:buffer'
import { ADD_TODO, DELETE_COMPLETED_TODO, DELETE_TODO, DONE_TODO } from '../src/redux/constants'
import add_todo_reducer from "../src/redux/reducers"
// import reducers from '../src/redux/reducers'
// import { useDispatch } from 'react-redux'

// const dispatch = useDispatch()
describe('Test Cases for Actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs'
    const expectedAction = {
      type: ADD_TODO,
      task: text,
      id: 1
    }
    // actions.add_todo_action(text)
    expect(actions.add_todo_action(text)).toEqual(expectedAction)
  })
  it('should create an action to delete a todo', () => {
    const id= 1
    const expectedAction = {
      type: DELETE_TODO,
      id: 1
    }
    expect(actions.delete_todo_action(id)).toEqual(expectedAction)
  })
  it('should create an action to complete a todo', () => {
    const task = "Meeting"
    const id=1
    const expectedAction = {
      type: DONE_TODO,
      task: task,
      id: 1
    }
    expect(actions.done_todo_action(id, task)).toEqual(expectedAction)
  })
  it('should create an action to delete a completed todo', () => {
    // const task = "Meeting"
    const id=1
    const expectedAction = {
      type: DELETE_COMPLETED_TODO ,
      id: 1
    }
    expect(actions.delete_completed_todo_action(id)).toEqual(expectedAction)
  })
})
describe('Test Cases for Reducer', () => {
  const initialState = {
    todos: [{task: "Code Review", id: 5}],
    completed: [{task: "Daily Scrum", id: 2}]
  }
  

  it('should return the initial state', () => {
  //   const text = 'Finish docs'
  //   const expectedAction = {
  //     type: "DEFAULT_TODO",
  //     task: text,
  //     id: 1
  //   }
  // const initialState = {
  //     todos: [{task: "Code Review", id: 5}],
  //     completed:[]
  //   }
    
    // actions.add_todo_action(text)
    expect(add_todo_reducer(undefined, {type: '', task: '', id: 1 })).toEqual({"add_todo_reducer": initialState})
  })
  it('should return the updated state after adding todo', () => {
    const text = 'Finish docs'
    const expectedAction = {
      type: "ADD_TODO",
      task: text,
      id: 1
    }
    // const initialState = {
    //     todos: [{task: "Code Review", id: 5}],
    //     completed: []
    //   }
    
    // actions.add_todo_action(text)
    expect(add_todo_reducer(undefined, expectedAction)).toEqual(
      {"add_todo_reducer":{
        ...initialState,
          todos: [
            ...initialState.todos, 
            {
            task: expectedAction.task,
            id: expectedAction.id
            }
            ]
      }}
  )

})  
  it('should return the updated state after deleting todo', () => {
    const text = 'Finish docs'
    const expectedAction = {
      type: "DELETE_TODO",
      task: text,
      id: 1
    }
    const a = initialState.todos.filter((item)=> item.id!== expectedAction.id)
    const b = initialState.completed.filter((item)=> item.id!== expectedAction.id)
    expect(add_todo_reducer(undefined, expectedAction)).toEqual(
      {"add_todo_reducer":{
        ...initialState,
        todos: a,
        completed:b
          
      }}
    )
  })

  it('should return the updated state after marking the task as completed', () => {
    const text = 'Code Review'
    const expectedAction = {
      type: "DONE_TODO",
      task: text,
      id: 5
    }
    expect(add_todo_reducer(undefined, expectedAction)).toEqual(
      {"add_todo_reducer":{
        todos: [],
        completed: [{task: "Daily Scrum", id: 2}, {task: "Code Review", id: 5}]
        
          
      }}
    )
  })
  it('should return the updated state after deleting the completed todo', () => {
    const text = 'Daily Scrum'
    const expectedAction = {
      type: "DELETE_COMPLETED_TODO",
      task: text,
      id: 2
    }
    expect(add_todo_reducer(undefined, expectedAction)).toEqual(
      {"add_todo_reducer":{
        todos: [ {task: "Code Review", id: 5}],
        completed: []
        
          
      }}
    )
  })
})
