import { createStore } from 'redux';

<<<<<<< Updated upstream
const store = createStore((state = { count: 0}) => {
=======
const store = createStore((state = { count: 10}) => {
>>>>>>> Stashed changes
    return state;
});

console.log(store.getState());