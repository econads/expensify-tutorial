import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE
const addExpense = (
    { description = '', note = '', amount = 0, createdAt = 0} = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount
    }
});

//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
        type: 'REMOVE_EXPENSE',
        id
    });

//Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            // console.log(action);
            // return state.filter((expense) => action.id !== expense.id);
            return state.filter(({ id }) => action.id !== id);
        default: 
            return state;
    }
};

//Filters reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', //date or amount
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default: 
            return state;
    }
};

//store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
});

const expense1 = store.dispatch(addExpense({description: 'Rent', amount: 100 }));
const expense2 = store.dispatch(addExpense({description: 'Food', amount: 1900 }));

store.dispatch(removeExpense({id: expense1.expense.id}));

const demoState = {
    expenses: [{
        id: 'asdfsdafasd',
        description: 'January rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};