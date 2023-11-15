import  {Form, Field, Formik, ErrorMessage} from 'formik';
import './formik-styles.css';
import React, {useState} from 'react';

export default function FormikUserForm(){
    const [formStatus, setFormStatus] = useState(false);

    const errorMessageStyle = {
        color: 'red',
        fontFamily: 'Lato, sans-serif',
        fontSize: '14px',
    }

    const validate = (values) => {
        const errors = {};

        if (!values.userName) {
            errors.userName = 'Name is required';
            setFormStatus(false);
        }

        if (!values.email) {
            errors.email = 'Email is required';
            setFormStatus(false);
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
            errors.email = 'Invalid email format';
            setFormStatus(false);
        }

        if (!values.phone) {
            errors.phone = 'Phone is required';
            setFormStatus(false);
        } else if (!/^\d{12}$/.test(values.phone)) {
            errors.phone = 'The phone number must contain only numbers and be 12 characters long';
            setFormStatus(false);
        }

        return errors;
    }

    return (
        <>
            <Formik
                initialValues={{
                    userName: '',
                    email: '',
                    phone: '',
                }
                }
                validate={validate}
                onSubmit={(values, { setStatus, resetForm }) => {
                    console.log(values);
                    resetForm();
                    setFormStatus(true);
                }}
            >
                <div className='wrapper'>
                    <Form className='formClass'>
                        <span className='title'>Name</span>
                        <Field type='text' name='userName'/>
                        <div style={errorMessageStyle}>
                            <ErrorMessage name='userName' />
                        </div>
                        <span className='title'>Email</span>
                        <Field type='text' name='email'/>
                        <div style={errorMessageStyle}>
                            <ErrorMessage name='email' />
                        </div>
                        <span className='title'>Phone</span>
                        <Field type='tel' name='phone'/>
                        <div style={errorMessageStyle}>
                            <ErrorMessage name='phone' />
                        </div>
                        <button type='submit' className='submit-button'>Sign In</button>
                        {formStatus && (
                            <p className='success-message'>Form submitted successfully!</p>
                        )}
                    </Form>
                </div>
            </Formik>
        </>
    );
}