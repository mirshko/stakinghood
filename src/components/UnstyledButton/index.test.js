import React from "react";
import { shallow } from "enzyme";

import UnstyledButton from "./index";

describe("<UnstyledButton />", () => {
  it("it works", () => {
    const wrapper = shallow(
      <UnstyledButton onClick={() => console.log("Clicked")}>
        Button
      </UnstyledButton>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.text()).toContain("Button");
  });
});
