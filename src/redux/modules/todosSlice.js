import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// initial state
const initialState = {
  todos: [
    {
      id: uuidv4(),
      title: "리덕스 툴킷 공부하기",
      content: "리덕스 툴킷을 공부합시다",
      isDone: false,
    },
    {
      id: uuidv4(),
      title: "서버 통신 공부하기",
      content: "서버 통신을 공부합시다",
      isDone: true,
    },
  ],
};

// action value, action creator, reducer
const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    },

    deleteTodo: (state, action) => {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    },

    switchTodo: (state, action) => {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, isDone: !todo.isDone };
          } else {
            return todo;
          }
        }),
      };
    },
  },
});

// export action creator, reducer
export const { addTodo, deleteTodo, switchTodo } = todosSlice.actions;
export default todosSlice.reducer;
