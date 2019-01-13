import React from "react";
import { shallow } from "enzyme";

import Validator from './index';

describe("<Validator />", () => {
  it("it works", () => {
    const wrapper = shallow(<Validator
      onClick={() => console.log("Clicked")}
      symbol="MYTH"
      name="Mythos Capital"
      color="#000"
      emoji="🔒"
      totalStake={365575}
      bondedStake={15575}
      uptime={100.00}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
