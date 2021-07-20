import { shallow } from 'enzyme';
import React from 'react';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('test in <TodoAdd />', () => {

    const handleAddTodo = jest.fn();

    const wrapper = shallow(
        <TodoAdd 
            handleAddTodo={ handleAddTodo }
        />
    );
    
    test('should show correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should not have call handleAddTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({ preventDefault(){} });

        expect( handleAddTodo ).toHaveBeenCalledTimes(0);
    });



    test('should have call handleAddTodo', () => {

        const value = 'Learning R';

        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({ preventDefault(){} });

        expect( handleAddTodo ).toHaveBeenCalledTimes(1);
        expect( handleAddTodo ).toHaveBeenCalledWith( expect.any(Object));
        expect( handleAddTodo ).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        });
        // valid reset
        expect( wrapper.find('input').prop('value')).toBe('');
    });
    
    
});
