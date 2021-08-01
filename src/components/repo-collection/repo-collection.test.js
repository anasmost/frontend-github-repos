import { shallow } from "enzyme";
import RepoCollection from "./repo-collection";
import React from "react";

describe("<RepoCollection/> Test", () => {
  const repoCollectionWrapper = shallow(<RepoCollection />);
  it("initially renders a spinner with empty collection div", () => {
    expect(repoCollectionWrapper).toMatchSnapshot();
    expect(repoCollectionWrapper.prop("isLoading")).toBeTruthy();
  });

  // Elaborate additional tests for mounting stage
});
