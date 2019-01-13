import React from "react";
import { shallow } from "enzyme";

import Button from "./index";

describe("<Button />", () => {
  it("it works", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });
});
