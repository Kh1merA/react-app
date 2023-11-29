export const ADD_TASK = 'ADD_TASK';

export const addTask = (text) => ({
    type: ADD_TASK,
    payload: { text, status: false },
});

export const DELETE_TASK = 'DELETE_TASK';

export const deleteTask = (index) => ({
    type: DELETE_TASK,
    payload: { index },
});

export const CHANGE_TASK_STATE = 'CHANGE_TASK_STATE';

export const changeTaskState = (index) => ({
    type: CHANGE_TASK_STATE,
    payload: { index },
});