import React from 'react';
import { shallow } from'enzyme';
import SignUpForm from '../../../components/signup/form';

test('should render SearchForm page correctly', () => {
   const wrapper = shallow(<SignUpForm />);
   wrapper.find('TextField').at(0).simulate('change',{
       target:{
           value:"daniel@gmail.com"
       }
   })
   expect(wrapper.state('email')).toEqual("daniel@gmail.com")
   expect(wrapper).toMatchSnapshot();
})