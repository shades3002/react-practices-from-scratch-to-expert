import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';



describe('Test component <CounterApp />', ()=> {

    let wrapper = shallow( <CounterApp /> );
    
    beforeEach( () => {
        wrapper = shallow( <CounterApp /> );
    });

    //const wrapper = shallow( <CounterApp /> );

    test('should show <CounterApp /> correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });


    test('should counter correctly', () => {
        const wrapper = shallow( 
            <CounterApp 
                value={ 100 } 
            /> 
        );

        const counter = wrapper.find('h2').text();

        expect( Number(counter) ).toBe( 100 );

        expect( counter.trim() ).toBe( '100' );
    });


        
    test('should action click Btn +1', () => {
        wrapper.find('button').at(0).simulate('click');

        const counter = wrapper.find('h2').text().trim();

        expect( counter ).toBe( '1' );

    });

    test('should action click Btn -1', () => {
        wrapper.find('button').at(2).simulate('click');

        const counter = wrapper.find('h2').text().trim();

        expect( counter ).toBe( '-1' );

    });

    test('should action click Btn Reset', () => {
        const wrapper = shallow(  < CounterApp value={ 105 } /> );

        wrapper.find('button').at(0).simulate('click');

        wrapper.find('button').at(1).simulate('click');
        
        const counter = wrapper.find('h2').text().trim();

        expect( counter ).toBe( '105' );
    });

});