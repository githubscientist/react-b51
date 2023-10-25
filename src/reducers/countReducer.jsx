// define a initial state
const initialState = {
    count: 0,
    clicksHistory: [],
}

// I, D, R

// define the reducer function
function reducer(state, action) {
    switch (action.type) {
        case 'incr':
            return { count: state.count + 1, clicksHistory: state.clicksHistory.concat('I') };
        
        case 'decr':
            return { count: state.count - 1, clicksHistory: state.clicksHistory.concat('D') };
        
        case 'reset':
            return { count: 0, clicksHistory: state.clicksHistory.concat('R') };
    }
}

export {
    initialState,
    reducer
};