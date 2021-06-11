import React, { useCallback, useEffect, useRef, useState } from "react";
import { useFetchRepos } from "./effects";
import "./repo-collection.scss";

const RepoCollection = () => {
  const [repos, setRepos] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  const scrollTargetRef = useRef(null);

  const handleScroll = useCallback((e) => {
    console.log("handleScroll Called !!!!");
    const { target } = e;
    if (target.scrollHeight - target.scrollTop < target.clientHeight * 1.5) {
      setPageCount((prevPageCount) => ++prevPageCount);
      scrollTargetRef.current.onscroll = undefined;
    }
  }, []);

  useFetchRepos(setRepos, pageCount);

  useEffect(() => {
    scrollTargetRef.current.onscroll = handleScroll;
  }, [repos]);

  return (
    <div className="repo-collection" ref={scrollTargetRef}>
      {repos.map(({ id, name, description }) => (
        <div key={id} className="repo">
          <h2 className="name">{name}</h2>
          <p className="description">{description}</p>
        </div>
      ))}
    </div>
  );
};

export default RepoCollection;
