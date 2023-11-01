import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
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

const App = () => {
    return (
        <div>
            <div>
                Count: {store.getState()}
            </div>

            <button
                onClick={() => store.dispatch({type: 'INCR'})}
            >plus</button>
            <button
                onClick={() => store.dispatch({ type: 'DECR' })}
            >minus</button>
            <button
                onClick={() => store.dispatch({ type: 'ZERO' })}
            >zero</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderApp = () => {
    root.render(<App />);
}

renderApp();

store.subscribe(renderApp);