import React from 'react';
// import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import FirstApp from "../FirstApp";



describe('Test component <FirstApp />', ()=> {

    // test('should show hi', () => {
    //     const hi = 'hi';
    //     const { getByText } = render( <FirstApp hi = { hi } /> );
    //     expect( getByText( hi ) ).toBeInTheDocument();
    // });

    test('should show <FirstApp /> correctly', () => {
        const hi = 'Hi';
        const wrapper = shallow( <FirstApp hi={ hi } /> );

        expect( wrapper ).toMatchSnapshot();
    });
    
    test('should subtitle correctly', () => {
        const hi = 'Hi';
        const subtitle = 'I am subtitle';
        const wrapper = shallow( 
            <FirstApp 
                hi={ hi } 
                subtitle={ subtitle }
            /> 
        );

        const textSubtitle = wrapper.find('p ~ p ~ p').text();

        expect( textSubtitle ).toBe( subtitle );
    });

});