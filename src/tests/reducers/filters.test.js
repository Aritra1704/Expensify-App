import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('Should setup default filter values', () => {
    const result = filtersReducer(undefined, { type: '@@INIT' });
    expect(result).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Should setup sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('Should setup sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };

    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('Should setup filter by text', () => {
    const text = 'test';
    const state = filtersReducer(undefined, { type: 'SET_TEXT', text });
    expect(state.text).toBe(text);
});

test('Should setup filter by startDate', () => {
    const startDate = moment();
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate });
    expect(state.startDate).toEqual(startDate);
});

test('Should setup filter by endDate', () => {
    const endDate = moment();
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate });
    expect(state.endDate).toEqual(endDate);
});