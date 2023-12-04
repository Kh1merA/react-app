import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk(
    'todoList/fetchTodos',
    async function (_, { rejectWithValue }) {
        try {
            const response = await fetch('https://656dc68fbcc5618d3c23ecf8.mockapi.io/todoList/fetchTodos/todo');

            const data = await response.json();

            if (!response.ok) {
                throw new Error('Something went wrong....');
            }

            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const toDoSlice = createSlice({
    name: 'toDoList',
    initialState: {
        todoArray: [],
        loading: false,
        error: null,
    },
    reducers: {
        addTask(state, action) {
            state.todoArray.push({ task: action.payload, completed: false });
        },
        deleteTask(state, action) {
            const taskToDelete = action.payload;
            state.todoArray = state.todoArray.filter((todo, index) => index !== taskToDelete);
        },
        updateTask(state, action) {
            const taskIndexToUpdate = action.payload;
            state.todoArray = state.todoArray.map((todo, index) =>
                index === taskIndexToUpdate ? { ...todo, completed: !todo.completed } : todo
            );
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.todoArray = action.payload;
                state.loading = false;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ? action.payload : 'Unknown error';
            });
    },
});

export const { addTask, deleteTask, updateTask } = toDoSlice.actions;

export default toDoSlice.reducer;