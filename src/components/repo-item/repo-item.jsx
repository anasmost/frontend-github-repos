import "./repo-item.scss";
import React, { memo } from "react";

const RepoItem = ({
  name,
  description,
  stargazers_count,
  open_issues_count,
  owner,
  pushed_at,
}) => {
  return (
    <article className="repo">
      <img
        className="owner-avatar"
        src={owner.avatar_url}
        alt={`${owner.login}'s avatar`}
      />
      <h2 className="name">{name}</h2>
      <p className="description">{description ?? "No Description"}</p>
      <div className="summary">
        <span className="stars">Stars: {stargazers_count}</span>
        <span className="issues">Issues: {open_issues_count}</span>
        Submitted on{" "}
        <time dateTime={pushed_at}>
          {new Date(pushed_at).toLocaleDateString()}
        </time>{" "}
        by{" "}
        <a className="owner-name" href={owner.html_url} target="_blank">
          {owner.login}
        </a>
      </div>
    </article>
  );
};

export default memo(RepoItem);
