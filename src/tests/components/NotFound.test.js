import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import NotFound from '../../components/NotFound';

test('Should render NotFound correctly', () => {
    const wrapper = shallow(<NotFound />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});