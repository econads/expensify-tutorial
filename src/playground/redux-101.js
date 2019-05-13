import { createStore } from 'redux';

//Action generators

// const add = ({a, b}, c) => {
//     return a + b + c;
// }
// console.log(add({a:1, b:2}, 3 ));

//get incrementBy from the passed in object which is the {}.  Default to 1 which is the = 1.
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    //The object name is the same as the param name, so we can just use the param directly.
    incrementBy
});

const decrementCount = ( {decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ( {count} = {}) => ({
    type: 'SET',
    count
});

//Reducer
// - pure functions (output depends *only* on input)
// - State and Action are NEVER directly changed, only duplicates.

const countReducer = (state = { count: 0}, action) => {
    console.log('running');

    switch (action.type){
        case 'INCREMENT':
        return {
            count: state.count + action.incrementBy
        };
        case 'DECREMENT':
        return {
            count: state.count - action.decrementBy
        };
        case 'SET':
        //This is supposed to force the type somehow
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
};

const store = createStore(countReducer);

//returns unsubscribe function
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

// store.dispatch(
//     {
//         type: 'INCREMENT',
//         incrementBy: 5
//     }
// );

store.dispatch(incrementCount());

store.dispatch(resetCount());
// store.dispatch(
//     {
//         type: 'RESET'
//     }
// );

store.dispatch(decrementCount());

store.dispatch(setCount({count: 101}));
// store.dispatch({
//     type: 'SET',
//     count: 101
// })

store.dispatch(decrementCount({decrementBy: 3}));
// store.dispatch(
//     {
//         type: 'DECREMENT',
//         decrementBy: 3
//     }
// );
