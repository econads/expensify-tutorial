import { createStore } from 'redux';

const store = createStore((state = { count: 0}, action) => {
    console.log('running');

    switch (action.type){
        case 'INCREMENT':
        const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
        return {
            count: state.count + incrementBy
        };
        case 'DECREMENT':
        const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
        return {
            count: state.count - decrementBy
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
});

//returns unsubscribe function
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(
    {
        type: 'INCREMENT',
        incrementBy: 5
    }
);

store.dispatch(
    {
        type: 'INCREMENT'
    }
);

store.dispatch(
    {
        type: 'RESET'
    }
);

store.dispatch(
    {
        type: 'DECREMENT'
    }
);

store.dispatch({
    type: 'SET',
    count: 101
})

store.dispatch(
    {
        type: 'DECREMENT',
        decrementBy: 3
    }
);
