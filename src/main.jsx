import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createStore } from 'redux';

/*
    action = {
        type: 'INCR'
    }
*/
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

store.subscribe(() => {
    console.log(store.getState());
})

// increment the counter
store.dispatch({type: 'INCR'})

store.dispatch({type: 'INCR'})

store.dispatch({type: 'DECR'})

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
