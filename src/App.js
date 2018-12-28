import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';

import data from './assets/data';

const App = () => {
	const [ todos, setTodos ] = useState(data);

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

	const renderTodos = () =>
		todos.map((todo, index) => (
			<Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} />
		));

	return (
		<div className="app">
			<div className="todo-list">
				{renderTodos()}
				<TodoForm addTodo={addTodo} />
			</div>
		</div>
	);
};
export default App;
