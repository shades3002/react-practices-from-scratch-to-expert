
import React from 'react';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';


describe('test in <HookApp />', () => {

    test('should show correct', () => {

        const wrapper = shallow( <HookApp />);

        expect( wrapper ).toMatchSnapshot();
        
    });
    
    
});
