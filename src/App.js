import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList/UserList';
import AlbumList from './components/Album/AlbumList';
import PhotoList from './components/Photo/PhotoList';
import './lib/app.css'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UserList />} />
                <Route path="/albumList/:userId" element={<AlbumList />} />
                <Route path="/photoList/:albumId" element={<PhotoList />} />
            </Routes>
        </Router>
    );
};

export default App;