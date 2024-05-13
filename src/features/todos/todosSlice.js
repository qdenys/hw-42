import { createSlice } from '@reduxjs/toolkit';

const initialState = [
	{ id: 1, task: 'Todo 1', isCompleted: false },
	{ id: 2, task: 'Todo 2', isCompleted: false },
	{ id: 3, task: 'Todo 3', isCompleted: false },
	{ id: 4, task: 'Todo 4', isCompleted: false },
	{ id: 5, task: 'Todo 5', isCompleted: false }
];

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		toggleTodo: (state, action) => {
			const todo = state.find(todo => todo.id === action.payload);
			if (todo) {
				todo.isCompleted = !todo.isCompleted;
			}
		},
		addTodo: (state, action) => {
			const newTodo = {
				id: state.length + 1,
				task: action.payload,
				isCompleted: false
			};
			state.push(newTodo);
		}
	}
});

export const { toggleTodo, addTodo } = todosSlice.actions;
export default todosSlice.reducer;
