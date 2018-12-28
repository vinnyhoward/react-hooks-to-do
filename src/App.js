import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';

import data from './assets/data';

const App = () => {
	const [ todos, setTodos ] = useState(data); // Array of "To-Do" objects
	// "todos" is the state
	// "setTodos" is the setState for "todos"
	const addTodo = (text) => {
		const newTodos = [ ...todos, { text } ];
		setTodos(newTodos);
	};

	const completeTodo = (index) => {
		const newTodos = [ ...todos ];
		newTodos[index].isCompleted = !newTodos[index].isCompleted;

		setTodos(newTodos);
	};

	const removeTodo = (index) => {
		const newTodos = [ ...todos ];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	return (
		<div className="app">
			<div className="todo-list">
				{todos.map((todo, index) => (
					<Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} />
				))}
				<TodoForm addTodo={addTodo} />
			</div>
		</div>
	);
};
export default App;
