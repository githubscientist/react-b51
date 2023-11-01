import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import noteReducer from './reducers/noteReducer.jsx';

const store = createStore(noteReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
);