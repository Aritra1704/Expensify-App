import { createStore } from 'redux';

// Argument destructuring
const add = ({ a, b }, c) => {
    return a + b + c;
}
console.log(add({a: 1, b: 12}, 100));

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    // incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count = 1 } = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

const store = createStore((state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            // const incrementBy = typeof action.incrementBy === 'number' ? 
            //                     action.incrementBy : 1;
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            // const decrementBy = typeof action.decrementBy === 'number' ? 
            //                     action.decrementBy : 1;
            return {
                count: state.count - action.decrementBy
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
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

// Decrement count
// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });

store.dispatch(decrementCount({ decrementBy: 10 }))

// Decrement count
store.dispatch(decrementCount());
// Reset count
// store.dispatch({
//     type: 'RESET'
// });
store.dispatch(resetCount());

// store.dispatch({
//     type: 'SET',
//     count: 101
// })
store.dispatch(setCount());