import React from "react";
import { shallow } from "enzyme";

import EmptyState from "./index";

describe("<EmptyState />", () => {
  it("renders the passed in text", () => {
    const wrapper = shallow(<EmptyState>Text</EmptyState>);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.text()).toContain("Text");
  });
});
