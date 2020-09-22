import { act } from 'react-dom/test-utils';
import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? 
                                action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? 
                                action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };  
        case 'SET':
            return {
                count: action.count
            };  
        case 'RESET':
            return {
                count: 0
            };  
        default:
            return state;
    } 
});

const unsubcribe = store.subscribe(() => {
    console.log(store.getState());
})


// Increment count
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

store.dispatch({
    type: 'INCREMENT'
});

// Decrement count
store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});

// Decrement count
store.dispatch({
    type: 'DECREMENT'
});
// Reset count
store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'SET',
    count: 101
})