import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";

// reducer 생성
const rootReducer = combineReducers({
    todos: todos,
});

// store 생성
const store = createStore(rootReducer);

export default store;
