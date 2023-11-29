import React, { useState } from 'react';
import './toDoStyle.css';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";

import {addTask, changeTaskState, deleteTask} from "../../store/actions";

function ToDoList() {
    const dispatch = useDispatch();

    const [todoText, setToDoText] = useState('');

    const todos = useSelector(state => state.todoList);

    const addTodo = () => {
        if (todoText.trim() !== '') {
            dispatch(addTask(todoText));
            setToDoText('');
        }
    };

    const deleteTodo = (index) => {
        dispatch(deleteTask(index));
    };

    const changeTodoState = (index) => {
        dispatch(changeTaskState(index));
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
            <div className='todo-list'>
                {todos.map((item, index) => (
                    <div className='todo-item' key={index}>
                        <div className='todo'>
                            <input
                                className='item-checkbox'
                                type='checkbox'
                                checked={item.status}
                                onChange={() => changeTodoState(index)}
                            />
                            <span style={{ textDecoration: item.status ? 'line-through' : 'none' }}>{item.text}</span>
                        </div>
                        <span className='delete' onClick={() => deleteTodo(index)}>X</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ToDoList;