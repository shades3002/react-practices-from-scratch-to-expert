import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';




describe('Test <AddCategory />', () => {
    
    const setCategories = () => {};

    test('should show correctly', () => {
        
        const wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

        expect( wrapper ).toMatchSnapshot();
    });
    

});
