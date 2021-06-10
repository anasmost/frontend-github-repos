import React, { useEffect, useState } from "react";
import "./repo-collection.scss";

const RepoCollection = () => {
  const apiURL = "https://api.github.com/search/repositories?q=created:>2021-05-10&sort=stars&order=desc";

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async (url) => {
      const response = await fetch(url);
      const data = await response.json();

      setRepos(data.items.map(({ id, name, description }) => ({ id, name, description })));
    };

    try {
      fetchRepos(apiURL);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div className="repo-collection">
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
