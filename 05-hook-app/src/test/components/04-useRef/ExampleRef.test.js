import React from 'react';
import { shallow } from 'enzyme';
import { ExampleRef } from '../../../components/04-useRef/ExampleRef';

describe('Test in <ExampleRef />', () => {

    const wrapper = shallow( <ExampleRef />);

    test('should show corretly', () => {
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe( false );
    });

    test('should show component MultipleCustomHooks', () => {
        wrapper.find('button').simulate('click');
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe( true );
    });    
    
});
