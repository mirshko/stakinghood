import React from "react";
import { shallow } from "enzyme";

import Input from "./index";

describe("<Input />", () => {
  it("it works", () => {
    const wrapper = shallow(<Input />);
    expect(wrapper).toMatchSnapshot();
  });
});
