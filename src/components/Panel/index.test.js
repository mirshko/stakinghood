import React from "react";
import { shallow } from "enzyme";

import Panel from "./index";

describe("<Panel />", () => {
  it("it works", () => {
    const wrapper = shallow(
      <Panel>
        <p>Children</p>
      </Panel>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
