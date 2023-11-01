import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCR':
            return state + 1;
        case 'DECR':
            return state - 1;
        case 'ZERO':
            return 0;
        default:
            return state;
    }
}

// create a store
const store = createStore(counterReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
);