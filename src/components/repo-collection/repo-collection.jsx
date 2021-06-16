import React, { useCallback, useEffect, useRef, useState } from "react";
import RepoItem from "../repo-item/repo-item";
import useFetchRepos from "./useFetchRepos.effect";
import "./repo-collection.scss";
import WithSpinner from "../with-spinner/with-spinner";

const RepoCollection = () => {
  const [state, setState] = useState({
    pageCount: 1,
    isLoading: true,
  });

  const repoCollectionDOMRef = useRef(null);

  const handleScroll = useCallback((e) => {
    const { target } = e;

    if (target.scrollHeight - target.scrollTop < target.clientHeight * 1.5) {
      setState((prevState) => ({
        pageCount: prevState.pageCount + 1,
        isLoading: true,
      }));
      repoCollectionDOMRef.current.onscroll = undefined;
    }
  }, []);

  const repos = useFetchRepos(function callback() {
    setState((prevState) => ({
      ...prevState,
      isLoading: false,
    }));
  }, state.pageCount);

  useEffect(() => {
    repoCollectionDOMRef.current.onscroll = handleScroll;
    return () => (repoCollectionDOMRef.current.onscroll = undefined);
  }, [repos]);

  return (
    <WithSpinner isLoading={state.isLoading}>
      <div className="repo-collection" ref={repoCollectionDOMRef}>
        {repos.map(({ id, ...otherRepoProps }) => (
          <RepoItem key={id} {...otherRepoProps} />
        ))}
      </div>
    </WithSpinner>
  );
};

export default RepoCollection;
