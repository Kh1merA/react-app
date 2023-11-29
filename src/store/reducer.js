import {ADD_TASK, CHANGE_TASK_STATE, DELETE_TASK} from "./actions";

const initialState = {
    todoList: [
        {text: 'Build Imperial', status: false },
        {text: 'Execute order 66', status: false},
        {text: 'Become sith', status: true},
        {text: 'Estimate all powers', status: true}
    ],
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                todoList: [...state.todoList, action.payload],
            };
        case DELETE_TASK:
            return {
                ...state,
                todoList: state.todoList.filter((_, index) => index !== action.payload.index),
            };
        case CHANGE_TASK_STATE:
            return {
                ...state,
                todoList: state.todoList.map((item, index) =>
                    index === action.payload.index
                        ? { ...item, status: !item.status }
                        : item
                ),
            };
        default:
            return state;
    }
};

export default todoReducer;
