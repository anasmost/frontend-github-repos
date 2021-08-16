import { shallow } from "enzyme";
import RepoItem from "./repo-item";

import React from "react";

describe("<RepoItem/>", () => {
  it("renders shallowly RepoItem", () => {
    const mockRepos = {
      name: "",
      description: "",
      stargazers_count: 0,
      open_issues_count: 0,
      pushed_at: "",
      owner: {
        login: "",
        avatar_url: "",
        html_url: "",
      },
    };
    expect.assertions(1);
    expect(shallow(<RepoItem {...mockRepos} />)).toMatchSnapshot();
  });
});
