import { shallow } from "enzyme";
import RepoItem from "./repo-item";

import React from "react";

describe("<RepoItem/>", () => {
  it("renders shallowly RepoItem", () => {
    const mockRepos = {
      owner: {},
    };
    expect.assertions(1);
    expect(shallow(<RepoItem {...mockRepos} />)).toMatchSnapshot();
  });
});
