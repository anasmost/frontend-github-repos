import { shallow } from "enzyme";
import WithSpinner from "./with-spinner";

import React from "react";

describe("<WithSpiner/> Test", () => {
  it("renders WithSpinner", () => {
    const mockProps = {
      isLoading: true,
      children: [],
    };
    expect.assertions(1);
    expect(shallow(<WithSpinner {...mockProps} />)).toMatchSnapshot();
  });
});
