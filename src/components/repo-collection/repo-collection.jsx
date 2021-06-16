import React, { useCallback, useEffect, useRef, useState } from "react";
import RepoItem from "../repo-item/repo-item";
import useFetchRepos from "./useFetchRepos.effect";
import "./repo-collection.scss";
import WithSpinner from "../with-spinner/with-spinner";

const RepoCollection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const repoCollectionDOMRef = useRef(null);

  const handleScroll = useCallback((e) => {
    const { target } = e;

    if (target.scrollHeight - target.scrollTop < target.clientHeight * 1.5) {
      setIsLoading(true);
      repoCollectionDOMRef.current.onscroll = undefined;
    }
  }, []);

  const repos = useFetchRepos(() => setIsLoading(false), isLoading);

  useEffect(() => {
    if (!isLoading) {
      repoCollectionDOMRef.current.onscroll = handleScroll;
      return () => (repoCollectionDOMRef.current.onscroll = undefined);
    }
  }, [isLoading]);

  return (
    <WithSpinner isLoading={isLoading}>
      <div className="repo-collection" ref={repoCollectionDOMRef}>
        {repos.map(({ id, ...otherRepoProps }) => (
          <RepoItem key={id} {...otherRepoProps} />
        ))}
      </div>
    </WithSpinner>
  );
};

export default RepoCollection;
