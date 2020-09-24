import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Add expense
const addExpense = (
    { 
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// Edit Expense
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// Remove Expense
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// Set text
const setTextFilter = (text) => ({
    type: 'SET_TEXT',
    text
});

// Expenses reducers
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            // return state.concat(action.expense);
            return [
                ...state, 
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return state;
                }
            });
        default:
            return state;
    }
};

// Filter reducer;
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            };
        default:
            return state;
    }
};

// Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filter: filterReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 10000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 100 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

store.dispatch(editExpense(expenseTwo.expense.id, { amount: 200 }));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter(''));


const demoState = {
    expenses: [{
        id: 'dvf',
        description: 'Sept Rent',
        not: 'Final payment',
        amount: 5000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};



