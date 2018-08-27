/*const multi = (a,b) => {
    return a*b;
}
test('should multiply 2*3 correctly', () = => {
    expect(multi(2,3)).toBe(6);
})

import React from 'react';
import {shallow} from 'enzyme';
import Home from '../../pages/home'

test('should render Home page correctly', () => {
    const wrapper = shallow(<Home />);
    // el nombre wrapper es por convención
    expect(wrapper).toMatchSnapshot();
})

*/
import React from 'react';
import { shallow } from'enzyme';
import Home from '../../pages/home';

test('should render Home page correctly', () => {
   const wrapper = shallow(<Home />);
   expect(wrapper.find('p').length).toBe(1);
   expect(wrapper).toMatchSnapshot();
})

test('should call onclick function', () => {
    const onClickSpy = jest.fn();
    const wrapper = shallow(<Home handleClick={onClickSpy}/>);
    wrapper.find('div').at(0).simulate('click');
    expect(onClickSpy.mock.calls.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
 })

