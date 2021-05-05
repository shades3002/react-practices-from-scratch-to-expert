import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Test in <GitGridItem />", () => {

  const title = 'Goku';
  const url   = 'https://localhost/goku.jpg';
  const wrapper = shallow( <GifGridItem title={ title } url={ url } /> );

  test("should display the component correctly", () => {

    expect(wrapper).toMatchSnapshot();

  });

  test('should have a paragraph with its title', () => {

    const paragraph = wrapper.find( 'p' );
    expect( paragraph.text().trim() ).toBe( title );

  });

  test('should have the image that corresponds to the url and alt of the props', () => {

    const img = wrapper.find( 'img' );

    expect( img.props().src ).toBe( url );
    expect( img.props().alt ).toBe( title );

  });

  test('should have animate__fadeIn', () => {
    
    const div = wrapper.find( 'div' );

    expect( div.hasClass('animate__fadeIn') ).toBe( true );

  });


  test('should have animate__fadeIn two', () => {
    
    const div = wrapper.find( 'div' );
    const className = div.prop( 'className' );

    expect( className.includes( 'animate__fadeIn' ) ).toBe( true );

  });
  
});
