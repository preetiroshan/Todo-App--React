import React from 'react'
import {connect, useDispatch} from 'react-redux'
import { add_todo_action } from '../redux/actions';

function AddTodoItem(props: any){
  console.log("props", props)
  const dispatch = useDispatch()
  const AddItemButtonHandler = (e: any) => {
    e.preventDefault();
    dispatch(add_todo_action(e.target.taskInput.value))
    e.target.taskInput.value=''
  }
    return (
      <div>
        <div className="form-group my-4">
          <form onSubmit={(e)=>{AddItemButtonHandler(e)}}>
      
          {/* <i className="fas fa-plus mr-2"></i> */}
          <input type="text" required className="form-control my-2" name="taskInput" placeholder="Enter Task"/>
          <button type="submit" className="btn btn-primary mt-2 mb-2">Add</button>
  
          <div className="d-flex align-items-center">
          {/* <i className="fas fa-plus mr-2"></i> */}
          {/* <input type="text" className="form-control my-2" name="taskInput" placeholder="Enter Task"/> */}
          </div>
          
        </form>
        </div>
      </div>
    )
  }
export default AddTodoItem

