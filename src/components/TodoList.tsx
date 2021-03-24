import React from "react";
import { connect, useSelector} from "react-redux";
// import { add_todo_action } from "../redux/actions";
// import { add_todo_reducer } from "../redux/reducers/add_todo_reducer";
import AddTodoItem from "./AddTodoItem";
import CompletedItem from "./CompletedItem";
import TodoItem from "./TodoItem";
import {CompState, MyStoreState, todoInterface} from "../types/index"

const TodoList = (props: CompState) => {
	console.log(props)
	// const selector = useSelector((state: MyStoreState) => {
	// 	console.log("state is", state);
	// 	const newState = {
	// 	todos: state.add_todo_reducer.todos,
	// completed: state.add_todo_reducer.completed,
	// 	}
	// 	return newState
	// })
	// const matchStateToProps = (state) => ({
	// 	todos: state.add_todo_reducer.todos,
	// 	completed: state.add_todo_reducer.completed,
	// });
	// const state = useSelector(state =>  ({
	// 	todos: state.add_todo_reducer.todos,
	// 	completed: state.add_todo_reducer.completed,
	// }))
	return (
		<div className="jumbotron mt-5">
			<h2 className="text-center">
				Todo List <span>&#128221;</span>
			</h2>
			<AddTodoItem />
			<hr />
			<div>
				<h4>Incomplete</h4>
				{
					!props.todos.length && (
						<div className="alert alert-success" role="alert">
							Yay! No pending task! &#128515;
						</div>
					)
					// DeleteItemHandler={this.DeleteItemEvent.bind(this)}
				}
				{console.log("props is", props)}
				{props.todos &&
					props.todos.map((item: todoInterface) => (
						<TodoItem
							title ={item.task}
							key={item.id}
							id={item.id}
							// DeleteItemHandler={this.DeleteItemEvent.bind(this)}
						/>
					))}
			</div>
			<hr />
			<div>
				<h4>
					Completed
					<span>
						<i className="fas fa-check-circle text-success ml-2"></i>
					</span>
				</h4>
				{
					!props.completed.length && (
						<div className="alert alert-success" role="alert">
							No completed task to show
						</div>
					)
					// DeleteItemHandler={this.DeleteItemEvent.bind(this)}
				}
				{console.log("props are", props)}
				{props.completed &&
					props.completed.map((item) => (
						<CompletedItem
							title={item.task}
							key={item.id}
							id={item.id}
							// DeleteItemHandler={this.DeleteItemEvent.bind(this)}
						/>
					))}
			</div>
		</div>
	);
};
// const matchStateToProps = (state) => {
//   return (
//     <div>
//       {console.log("state is", state)}

//     </div>
//   )
// }
// const matchStateToProps = (state: any) => ({
// 	todos: state.add_todo_reducer.todos,
// 	completed: state.add_todo_reducer.completed,
// });
export default TodoList;

