import React, { useState } from 'react';
import './toDoStyle.css';

function ToDoScript() {

    const [todoList, setList] = useState([
        {text: 'Play Valorant', status: false },
        {text: 'Eat chocolate', status: false},
        {text: 'Read comics', status: true}
    ]);

    const [todoText, setToDoText] = useState('');

    const addTask = () => {
        if (todoText.trim() !== '') {
            const newList = [...todoList, { text: todoText, status: false }];
            setList(newList);
            setToDoText('');
        }
    };

    const deleteTask = (index) => {
        const updatedList = [...todoList];
        updatedList.splice(index, 1);
        setList(updatedList);
    };

    const changeTaskState = (index) => {
        const updatedList = [...todoList];
        const newList = updatedList[index];
        if (newList) {
            newList.status = !newList.status;
            setList(updatedList);
        }
    };

    return (
        <div className='container'>
            <div className='header'>
                <span className='header-title'>TODO</span>
            </div>
            <div className='input-container'>
                <button onClick={addTask} className='add-button'>+</button>
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
                {todoList.map((item, index) => (
                    <div className='todo-item' key={index}>
                        <div className='todo'>
                            <input
                                className='item-checkbox'
                                type='checkbox'
                                checked={item.status}
                                onChange={() => changeTaskState(index)}
                            />
                            <span style={{ textDecoration: item.status ? 'line-through' : 'none' }}>{item.text}</span>
                        </div>
                        <span className='delete' onClick={() => deleteTask(index)}>X</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ToDoScript;