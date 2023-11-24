import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './user-list.css'

const UserList = () => {
    const [userList, setUserList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUserList(data))
            .catch(error => console.error('Error fetching users: ', error));
    }, []);

    const handleAlbumsClick = (userId) => {
        navigate(`/albumList/${userId}`);
    };

    return (
        <div className='wrapper'>
            <h1>User List</h1>
            <ul>
                {userList.map(user => (
                    <li key={user.id} className='user-row'>
                        {user.name} {' '}
                        <button onClick={() => handleAlbumsClick(user.id)} className='button'>Albums</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;