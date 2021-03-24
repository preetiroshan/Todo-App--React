import React, { Component } from 'react'
import { useSelector } from 'react-redux';
import TodoList from './components/TodoList'
import { MyStoreState } from './types';

export default function App() {
    // const selector= useSelector(state : MyStoreState => state.add_todo_reducer)
    const selector = useSelector((state: MyStoreState) => {
      // console.log("inside appjs state is", state)
      return state.add_todo_reducer
      }
    )
    return (
        <div>
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <TodoList todos={selector.todos} completed={selector.completed} />
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    )
    }
