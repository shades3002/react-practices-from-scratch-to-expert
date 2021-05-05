import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Test in <GitGridItem />", () => {
  test("should display the component correctly", () => {

    const wrapper = shallow(<GifGridItem />);
    expect(wrapper).toMatchSnapshot();
    
  });
});
