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
    console.log(action);
    switch (action.type) {
        case 'INCR':
            return state + 1;
        case 'DECR':
            return state - 1;
        default:
            return state;
    }
}

// create a store
const store = createStore(counterReducer);

// get the current store state
console.log(store.getState());

// increment the counter
store.dispatch({
    type: 'INCR'
})

console.log(store.getState());

// increment the counter
store.dispatch({
    type: 'INCR'
})

console.log(store.getState());

// increment the counter
store.dispatch({
    type: 'DECR'
})

console.log(store.getState());

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
