// define a initial state
const initialState = {
    count: 0,
}

// define the reducer function
function reducer(state, action) {
    switch (action.type) {
        case 'incr':
            return { count: state.count + 1 };
        
        case 'decr':
            return { count: state.count - 1 };
        
        case 'reset':
            return { count: 0 };
    }
}

export {
    initialState,
    reducer
};