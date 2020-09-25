// Section 11 Lesson 101
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ 
    description: 'Water bill', 
    amount: 500, 
    createdAt: -21000 
}));

const expenseTwo = store.dispatch(addExpense({ 
    description: 'Gas Bill', 
    amount: 700, 
    createdAt: -1000 
}));

store.dispatch(setTextFilter('water'));

ReactDOM.render(<AppRouter />, document.getElementById('app'));