import React from 'react';
import { shallow } from'enzyme';
import SearchForm from '../../../components/search/search';

test('should render SearchForm page correctly', () => {
   const wrapper = shallow(<SearchForm />);
   wrapper.find('TextField').at(0).simulate('change',{
       target:{
           value:"guadalajara"
       }
   })
   expect(wrapper.state('search')).toEqual("guadalajara")
   expect(wrapper).toMatchSnapshot();
})

