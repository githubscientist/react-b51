import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// 1. define the data notes
const notes = [
    {
        id: 1,
        content: 'HTML is easy',
        important: true
    },
    {
        id: 2,
        content: 'Browser can only execute Javascript',
        important: false
    },
    {
        id: 3,
        content: 'GET and POST are the most important methods of HTTP protocol',
        important: true
    },
    {
        id: 4,
        content: 'JSON server acts like a mock server without a real backend server to serve API endpoints',
        important: false
    },
    {
        id: 5,
        content: 'CRUD with React with routers, useState, useReducers, useContext, useRef hooks axios',
        important: true
    }
];

// 2. pass the data notes as props to the App component
ReactDOM.createRoot(document.getElementById('root')).render(<App notes={ notes } />);
