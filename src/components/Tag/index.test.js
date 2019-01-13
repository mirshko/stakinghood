import React from "react";
import { shallow } from "enzyme";

import Tag from "./index";

describe("<Tag />", () => {
  it("it works", () => {
    const wrapper = shallow(<Tag />);
    expect(wrapper).toMatchSnapshot();
  });
});
