import { configureStore } from '@reduxjs/toolkit';
import { todos } from './todos/todos.slice';

export const store = configureStore({
  reducer: {
    todos: todos.reducer,
  },
});

export type TypeRootState = ReturnType<typeof store.getState>;
