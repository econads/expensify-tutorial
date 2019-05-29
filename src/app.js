import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';

const store = configureStore();

const expense1 = store.dispatch(addExpense({description: 'water bill' }));
const expense2 = store.dispatch(addExpense({description: 'Gas bill' }));
store.dispatch(setTextFilter('Gas'));

console.log(store.getState());
console.log(getVisibleExpenses());


ReactDOM.render(<AppRouter/>, document.getElementById('app'));