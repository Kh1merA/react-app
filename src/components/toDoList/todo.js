import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchTodos, addTask } from '../../store/slices/toDoSlice';
import {TodoList} from './todoList';

import './todoStyle.css';

function Todo() {
    const dispatch = useDispatch();
    const [todoText, setToDoText] = useState('');
    const { loading, error } = useSelector(state => state.todoList);

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    const addTodo = async () => {
        if (todoText.trim() !== '') {
            await dispatch(addTask(todoText));
            setToDoText('');
        }
    };

    return (
        <div className='container'>
            <div className='header'>
                <span className='header-title'>TODO</span>
            </div>
            <div className='input-container'>
                <button onClick={addTodo} className='add-button'>+</button>
                <input
                    type="text"
                    className="txt-input"
                    placeholder="Create a new todo..."
                    spellCheck="false"
                    autoComplete="off"
                    value={todoText}
                    onChange={(event) => setToDoText(event.target.value)}
                />
            </div>
            {loading && <h3>Loading....</h3>}
            {error && <h3>{error}</h3>}
            <div className='todo-list'>
                <TodoList/>
            </div>
        </div>
    );
}

export default Todo;