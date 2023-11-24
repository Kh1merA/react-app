import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const AlbumList = () => {
    const [albumList, setAlbumList] = useState([]);
    const { userId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then(response => response.json())
            .then(data => setAlbumList(data))
            .catch(error => console.error('Error fetching albums: ', error));
    }, [userId]);

    const handlePhotosClick = (albumId) => {
        navigate(`/photoList/${albumId}`);
    };

    return (
        <div className='wrapper'>
            <h2>Album List</h2>
            <ul>
                {albumList.map(album => (
                    <li key={album.id} className='user-row'>
                        {album.title} {' '}
                        <button onClick={() => handlePhotosClick(album.id)} className='button'>Photos</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AlbumList;