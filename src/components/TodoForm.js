import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
	const [ value, setValue ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) return;
		addTodo(value);
		setValue('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				placeholder="What do you need to do?"
				type="text"
				className="input-todo"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</form>
	);
};

export default TodoForm;
