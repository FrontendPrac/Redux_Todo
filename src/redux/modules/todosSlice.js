import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// initial state
const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

// Thunk - fulfillWithValue, rejectWithValue
export const __getTodos = createAsyncThunk(
  "getTodos",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:4000/todos");
      // console.log(data);
      return thunkAPI.fulfillWithValue(data.data); //통신이 성공했을때 dispatch 실행
    } catch (error) {
      // console.log(error);
      return thunkAPI.rejectWithValue(error); //통신이 실패했을때 dispatch 실행
    }
  }
);

export const __addTodo = createAsyncThunk(
  "addTodo",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      await axios.post("http://localhost:4000/todos", payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteTodo = createAsyncThunk(
  "deleteTodo",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      await axios.delete(`http://localhost:4000/todos/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __switchTodo = createAsyncThunk(
  "switchTodo",
  async (payload, thunkAPI) => {
    try {
      // console.log(payload);
      await axios.patch(`http://localhost:4000/todos/${payload.id}`, {
        isDone: payload.isDone,
      });
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// crateSlice, extraReducer - action value, action creator, reducer
const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    // __getTodos
    [__getTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [__getTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // __addTodo
    [__addTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__addTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = [...state.todos, action.payload];
    },
    [__addTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // __deleteTodo
    [__deleteTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = [
        ...state.todos.filter((todo) => todo.id !== action.payload),
      ];
    },
    [__deleteTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // __switchTodo
    [__switchTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__switchTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = [
        ...state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, isDone: action.payload.isDone };
          } else {
            return todo;
          }
        }),
      ];
    },
    [__switchTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// export action creator, reducer
export const { addTodo, deleteTodo, switchTodo } = todosSlice.actions;
export default todosSlice.reducer;
