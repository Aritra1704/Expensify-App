import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should Set deafult state', () => {
    const result = expenseReducer(undefined, { type: '@@INIT' });
    expect(result).toEqual([]);
});

test('Should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const result = expenseReducer(expenses, action);
    expect(result).toEqual([
        expenses[0],
        expenses[2]
    ]);
});

test('Shouldnot remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const result = expenseReducer(expenses, action);
    expect(result).toEqual(expenses);
});

test('Should Add an expense', () => {
    const expense = {
        id: '109',
        description: 'Laptop',
        amount: 29500,
        createdAt: 20000,
        note: ''
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const result = expenseReducer(expenses, action);
    expect(result).toEqual([
        ...expenses,
        expense
    ]);
});

test('Should edit expense by id', () => {
    const note = "new note";
    
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            note
        }
    };
    const result = expenseReducer(expenses, action);
    expect(result[1].note).toBe(note);
});

test('Shouldnot edit expense if id not found', () => {
    const note = "new note";
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            note
        }
    };
    const result = expenseReducer(expenses, action);
    expect(result).toEqual(expenses);
});