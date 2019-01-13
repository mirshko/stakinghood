import React from "react";
import { shallow } from "enzyme";

import Uppercase from "./index";

describe("<Uppercase />", () => {
  it("it works", () => {
    const wrapper = shallow(<Uppercase />);
    expect(wrapper).toMatchSnapshot();
  });
});
