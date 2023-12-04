import { configureStore } from '@reduxjs/toolkit';

import todoReducer from './slices/toDoSlice';

export default configureStore({
    reducer: {
        todoList: todoReducer,
    }
});