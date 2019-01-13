import React from "react";
import { shallow } from "enzyme";

import Modal from "./index";

describe("<Modal />", () => {
  it("it works", () => {
    const wrapper = shallow(
      <Modal onClick={() => console.log("Close Modal")}>
        <p>Children</p>
      </Modal>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
