import {ErrorMessage, Field, Form, Formik} from 'formik';
import React, {useState} from 'react';

import './contact-list.css';

const errorMessageStyle = {
    color: 'red',
    fontFamily: 'Lato, sans-serif',
    fontSize: '14px',
}

export default function UserForm({ handleSaveContact, handleCancel }){
    const validate = (values) => {
        const errors = {};

        if (!values.name) {
            errors.name = 'Name is required';
        }

        if (!values.username) {
            errors.username = 'Surname is required';
        }

        if (!values.phone) {
            errors.phone = 'Phone is required';
        } else if (!/^\d{12}$/.test(values.phone)) {
            errors.phone = 'The phone number must contain only numbers and be 12 characters long';
        }

        return errors;
    }
    return (
        <div className='form-class'>
            <h2>Add new contact</h2>
            <Formik
                initialValues={{
                    name: '',
                    username: '',
                    phone: '',
                }}
                validate={validate}
                onSubmit={(values) => handleSaveContact(values)}
            >
                <Form className='form'>
                    <div>
                        <div className='form-row'>
                        <span>Name:</span>
                        <Field type='text' id='name' name='name' />
                        </div>
                        <ErrorMessage name='name' component='div' style={errorMessageStyle}/>
                    </div>
                    <div>
                        <div className='form-row'>
                        <span>Surname:</span>
                        <Field type='text' id='username' name='username' />
                        </div>
                        <ErrorMessage name='username' component='div' style={errorMessageStyle}/>
                    </div>
                    <div>
                        <div className='form-row'>
                        <span>Phone:</span>
                        <Field type='text' id='phone' name='phone' />
                        </div>
                        <ErrorMessage name='phone' component='div' style={errorMessageStyle}/>
                    </div>
                    <div>
                        <div className='form-row'>
                        <button type='submit' className='form-button'>Save</button>
                        <button type='button' onClick={handleCancel} className='form-button'>
                            Cancel
                        </button>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}