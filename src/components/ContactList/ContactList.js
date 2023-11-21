import { Formik, Form, Field, ErrorMessage } from 'formik';
import React, { useState, useEffect } from 'react';

import UserForm from './UserForm';

import './contact-list.css';

export default function ContactList(){
    const [contacts, setContacts] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                const contactsWithIds = data.map((contact) => ({ ...contact, id: contact.id }));
                setContacts(contactsWithIds);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };

        fetchContacts();
    }, []);

    const handleDeleteContact = (id) => {
        setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
    };

    const handleShowForm = () => {
        setShowForm(true);
    };

    const handleCancel = () => {
        setShowForm(false);
    };

    const handleSaveContact = (values) => {
        const newContactWithId = { ...values, id: Date.now() };
        setContacts((prevContacts) => [...prevContacts, newContactWithId]);
        setShowForm(false);
    };

    return (
        <div className='wrapper'>
            <h1>Contacts</h1>
            <table className='table'>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {contacts.map((contact) => (
                    <tr key={contact.id}>
                        <td>{contact.name}</td>
                        <td>{contact.username}</td>
                        <td>{contact.phone}</td>
                        <td>
                            <button onClick={() => handleDeleteContact(contact.id)} className='delete-button'>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {showForm ? (
                <UserForm
                    handleCancel={handleCancel}
                    handleSaveContact={handleSaveContact}/>
            ) : (
                <button onClick={handleShowForm}>Add contact</button>
            )}
        </div>
    );
}