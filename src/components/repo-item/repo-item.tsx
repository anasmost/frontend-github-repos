import "./repo-item.scss";
import React, { FC, memo } from "react";
import { Repo } from "../repo-collection/useFetchRepos.effect";

const RepoItem: FC<Repo> = ({
  id,
  name,
  description,
  stargazers_count,
  open_issues_count,
  owner,
  pushed_at,
}) => {
  return (
    <article
      className="repo"
      tabIndex={0}
      aria-label={`${name} repository`}
      aria-describedby={id}
    >
      <img
        className="owner-avatar"
        src={owner.avatar_url}
        alt={`${owner.login}'s avatar`}
      />
      <h2 className="name">{name}</h2>
      <p className="description" id={id}>
        {description ?? "No Description"}
      </p>
      <div className="summary">
        <span className="stars">Stars: {stargazers_count}</span>
        <span className="issues">Issues: {open_issues_count}</span>
        <span className="submition">
          Submitted on{" "}
          <time dateTime={pushed_at}>
            {new Date(pushed_at).toLocaleDateString()}
          </time>{" "}
          by{" "}
          <a
            className="owner-name"
            href={owner.html_url}
            target="_blank"
            rel="noopener"
            tabIndex={0}
            aria-label={`link of ${name} repository on github`}
          >
            {owner.login}
          </a>
        </span>
      </div>
    </article>
  );
};

export default memo(RepoItem);
