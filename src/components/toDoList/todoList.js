import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {deleteTask, updateTask} from '../../store/slices/toDoSlice';

export function TodoList(){
    const dispatch = useDispatch();
    const { todoArray} = useSelector(state => state.todoList);

    const deleteTodo = (id) => {
        dispatch(deleteTask(id));
    };

    const changeTodoState = (id) => {
        dispatch(updateTask(id));
    };

    return(
        <>
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
        </>
    );
}

