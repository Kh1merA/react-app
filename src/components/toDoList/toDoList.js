import React, { useState, useEffect } from 'react';
import './toDoStyle.css';
import { fetchTodos, addTask, deleteTask, updateTask } from '../../store/slices/toDoSlice';
import { useSelector, useDispatch } from 'react-redux';

function ToDoList() {
    const dispatch = useDispatch();
    const [todoText, setToDoText] = useState('');
    const { loading, error, todoArray } = useSelector(state => state.todoList);

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    const addTodo = async () => {
        if (todoText.trim() !== '') {
            await dispatch(addTask(todoText));
            setToDoText('');
        }
    };

    const deleteTodo = (id) => {
        dispatch(deleteTask(id));
    };

    const changeTodoState = (id) => {
        dispatch(updateTask(id));
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
                {todoArray.map((item, id) => (
                    <div className='todo-item' key={id}>
                        <div className='todo'>
                            <input
                                className='item-checkbox'
                                type='checkbox'
                                checked={item.completed}
                                onChange={() => changeTodoState(id)}
                            />
                            <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>{item.task}</span>
                        </div>
                        <span className='delete' onClick={() => deleteTodo(id)}>X</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ToDoList;