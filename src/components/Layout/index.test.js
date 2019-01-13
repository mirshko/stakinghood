import React from "react";
import { shallow } from "enzyme";

import Layout from "./index";

describe("<Layout />", () => {
  it("it works", () => {
    const wrapper = shallow(
      <Layout>
        <p>Children</p>
      </Layout>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
