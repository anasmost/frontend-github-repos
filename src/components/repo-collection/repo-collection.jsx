import React, { useCallback, useEffect, useRef, useState } from "react";
import RepoItem from "../repo-item/repo-item";
import useFetchRepos from "./useFetchRepos.effect";
import "./repo-collection.scss";

const RepoCollection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pageCount, setPageCount] = useState(1);

  const repoCollectionDOMRef = useRef(null);

  const handleScroll = useCallback((e) => {
    const { target } = e;
    if (target.scrollHeight - target.scrollTop < target.clientHeight * 1.5) {
      setPageCount((prevPageCount) => ++prevPageCount);
      repoCollectionDOMRef.current.onscroll = undefined;
    }
  }, []);

  const repos = useFetchRepos(setIsLoading, pageCount);

  useEffect(() => {
    repoCollectionDOMRef.current.onscroll = handleScroll;
    return () => (repoCollectionDOMRef.current.onscroll = undefined);
  }, [repos]);

  return (
    <div className="repo-collection" ref={repoCollectionDOMRef}>
      {repos.map(({ id, ...otherRepoProps }) => (
        <RepoItem key={id} {...otherRepoProps} />
      ))}
    </div>
  );
};

export default RepoCollection;
