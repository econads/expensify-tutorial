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

//EDIT_EXPENSE
const editExpense = (id, updates ) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
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
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        //Copy expense and override anything in updates
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            })
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
store.dispatch(editExpense( expense2.expense.id, { amount: 500 }));

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

//Object spread operator (clone)
// const user = {
//     name: 'Jen',
//     age: 24
// };

// console.log({
//     ...user,
//     location: 'Boston',
//     age: 34
// });