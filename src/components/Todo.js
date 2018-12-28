import React from 'react';

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
	return (
		<div className="todo" style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
			<span>{todo.text}</span>
			<div>
				<button
					className={todo.isCompleted ? 'completed-btn' : 'complete-btn'}
					onClick={() => completeTodo(index)}
				>
					{todo.isCompleted ? 'Completed' : 'Complete'}
				</button>
				<button className="remove-btn" onClick={() => removeTodo(index)}>
					x
				</button>
			</div>
		</div>
	);
};

export default Todo;
