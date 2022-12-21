import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/todosSlice";

// root reducer, store
const store = configureStore({
  reducer: { todos: todos },
});

export default store;
