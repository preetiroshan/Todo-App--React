import React from "react";
import { delete_todo_action, done_todo_action } from "../redux/actions";
import { connect, useDispatch } from "react-redux";
import { todoItemProps } from "../types";
// import {delete_todo}
export default function TodoItem(props: todoItemProps) {
	const dispatch = useDispatch()
	const DeleteItemButtonHandler = (id: number) => {
		dispatch(delete_todo_action(id));
		console.log(2);
  };
  const DoneItemButtonHandler = (id:number, task: string) => {
		dispatch(done_todo_action(id, task));
		console.log("after dispatching done_todo_action");
	};
	return (
		<div className="alert alert-primary d-flex justify-content-between">
      {console.log("props of item", props)}
			<span>
				<span>
					<i
						className="fas fa-check-circle text-success mr-2"
						style={{ cursor: "pointer" }}
            onClick={() => DoneItemButtonHandler(props.id, props.title)}
            ></i>
				</span>
				{props.title}
			</span>
			<span>
				<i
					className="fas fa-times text-danger"
					style={{ cursor: "pointer" }}
          onClick={() => DeleteItemButtonHandler(props.id)}
				></i>
			</span>
		</div>
	);
};
// export default class TodoItem extends Component {
//   DeleteItemButtonHandler(){
//     console.log(2);
//     this.props.DeleteItemHandler(this.props.id)
//   }
//   render() {
//     return (
//       <div className="alert alert-primary d-flex justify-content-between">
//         <span>{this.props.title}</span>
//         <span><i className="fas fa-trash text-danger" style={{cursor: "pointer"}}  onClick={()=>this.DeleteItemButtonHandler()}></i></span>
//       </div>
//     )
//   }
// }
