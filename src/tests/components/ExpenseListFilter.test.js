import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { ExpenseListFilter } from '../../components/ExpenseListFilter';
import { filters, altfilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();

    wrapper = shallow(
        <ExpenseListFilter 
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test('Should render expenselistfilter correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should render expenselistfilter with alt data correctly', () => {
    wrapper.setProps({
        filters: altfilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('Should handle text change', () => {
    const value = 'rent';
    wrapper.find('input').simulate('change', {
        target: { value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('Should sort by date', () => {
    const value = 'date';
    wrapper.setProps({
        filters: altfilters
    });
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('Should sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('Should handle date changes', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')
                ({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);   
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);   
});

test('Should handle date focus change', () => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);   
});