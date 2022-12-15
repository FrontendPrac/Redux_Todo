import { v4 as uuidv4 } from 'uuid';

// action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const SWITCH_TODO = "SWITCH_TODO"

// action creator
export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload: payload,
    };
};

export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload: payload,
    };
};

export const switchTodo = (payload) => {
    return {
        type: SWITCH_TODO,
        payload: payload
    }
}

// initial state
const initialState = {
    todos: [
        {
            id: uuidv4(),
            title: "리엑트 공부하기",
            content: "리엑트를 공부해봅시다",
            isDone: false,
        },
        {
            id: uuidv4(),
            title: "리덕스 공부하기",
            content: "리덕스를 공부해봅시다",
            isDone: true,
        },
    ],
};

//reducer
const todos = (state = initialState, action) => {
    // console.log(action);
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case SWITCH_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            }
        default:
            return state;
    }
};

export default todos;
