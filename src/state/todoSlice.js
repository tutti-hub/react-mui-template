import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoItems: [
    { id: 1, task: 'Do something...' },
    { id: 2, task: 'Do something else...' },
    { id: 3, task: 'Do one more thing...' },
  ],
  nextId: 4,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    cleartTodoItems: (state) => {
      state.todoItems = [];
    },
    addTodoItem: (state, action) => {
      state.todoItems.push({ id: state.nextId++, task: action.payload });
    },
  },
});

export default todoSlice.reducer;
export const { cleartTodoItems, addTodoItem } = todoSlice.actions;
