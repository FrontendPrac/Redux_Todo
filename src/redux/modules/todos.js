// action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

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

// initial state
const initialState = {
    todos: [
        {
            id: 1,
            title: "리엑트 공부하기",
            content: "리엑트를 공부해봅시다",
            isDone: false,
        },
        {
            id: 2,
            title: "리덕스 공부하기",
            content: "리덕스를 공부해봅시다",
            isDone: true,
        },
    ],
};

//reducer
const todos = (state = initialState, action) => {
    console.log(action);
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
        default:
            return state;
    }
};

export default todos;
