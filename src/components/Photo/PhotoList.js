import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './photo-list.css'

const PhotoList = () => {
    const [photoList, setPhotoList] = useState([]);
    const { albumId } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(response => response.json())
            .then(data => setPhotoList(data))
            .catch(error => console.error('Error fetching photos: ', error));
    }, [albumId]);

    return (
        <div className='list-wrapper'>
            <h2>Photo List</h2>
            <ul>
                {photoList.map(photo => (
                    <li key={photo.id}>
                            <img src={photo.thumbnailUrl} alt={photo.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PhotoList;