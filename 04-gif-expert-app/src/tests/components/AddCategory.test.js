import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';




describe('Test <AddCategory />', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

    beforeEach( () => {
        // clear simulations in test
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    });

    test('should show correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('should onchange text input', () => {

        const input = wrapper.find( 'input' );
        const value = 'hi';
        input.simulate('change', { target: {value} });

        expect( wrapper.find( 'input' ).prop( 'value' ).trim() ).toBe( value );
        
    })

    test('should not trigger the submit event', () => {
        
        wrapper.find( 'form' ).simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();

    });
    
    
});
