// Formik: small group of react components and hooks for building forms in React

import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import './styles/App.css';

function ContactForm() {
  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}

      validate={(values) => {
        const errors = {};

        if (!values.name) {
          errors.name = 'Name is required';
        }

        if (values.email == '') {
          errors.email = 'Email is required';
        } else if(!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i.test(values.email)){
          errors.email = 'Invalid email address';
        }

        return errors;
      }}

      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <div>
          <label htmlFor='name'>Name</label>
          <Field type='text' name='name' />
          <ErrorMessage name='name' component='div' className='error'/>
        </div>

        <div>
          <label htmlFor='email'>Email</label>
          <Field type='email' name='email' />
          <ErrorMessage name='email' component='div' className='error'/>
        </div>

        <div>
          <label htmlFor='message'>Message</label>
          <Field as='textarea' name='message' />
          <ErrorMessage name='message' component='div' className='error'/>
        </div>

        <button type='submit'>Submit</button>
    </Form>
    </Formik>
  )
}

function App() {
  return (
    <div>
      <ContactForm />
    </div>
  )
}

export default App;