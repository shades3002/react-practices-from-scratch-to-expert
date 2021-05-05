import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';




describe('Test <AddCategory />', () => {
    
    const setCategories = () => {};
    const wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

    test('should show correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('should onchange text input', () => {

        const input = wrapper.find( 'input' );
        const value = 'hi';
        input.simulate('change', { target: {value} });

        expect( wrapper.find( 'input' ).prop( 'value' ).trim() ).toBe( value );
        
    })
    


});
