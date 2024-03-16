import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
    editTodos: (state, action) => {
      const { id, newTodo } = action.payload;
      const todoIndex = state.items.findIndex((todo) => todo.id === id);
      if (todoIndex !== -1) {
        state.items[todoIndex] = newTodo;
      }
    },

    toggleFavorite: (state, action) => {
      const todo = state.items.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isFavorite = !todo.isFavorite;
      }
    },
  },
});

export const { addTodo, removeTodo, editTodos, toggleFavorite } =
  todoSlice.actions;

export default todoSlice.reducer;
