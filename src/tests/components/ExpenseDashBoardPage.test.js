import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseDashBoardPage from '../../components/ExpenseDashBoardPage';

test('Should render ExpenseDashBoardPage correctly', () => {
    const wrapper = shallow(<ExpenseDashBoardPage />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});