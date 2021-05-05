import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Test in <GitGridItem />", () => {

  test("should display the component correctly", () => {

    const title = 'Goku';
    const url   = 'https://localhost/goku.jpg';

    const wrapper = shallow( <GifGridItem title={ title } url={ url } /> );
    expect(wrapper).toMatchSnapshot();

  });

});
