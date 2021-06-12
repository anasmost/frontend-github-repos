import "./repo-item.scss";
import React, { memo } from "react";

const RepoItem = ({
  name,
  description,
  stargazers_count,
  open_issues_count,
  owner,
}) => {
  return (
    <article className="repo">
      <img
        className="owner-avatar"
        src={owner.avatar_url}
        alt={`${owner.login}'s avatar`}
      />
      <h2 className="name">{name}</h2>
      <p className="description">{description}</p>
      <div className="summary">
        <span className="stars">Stars: {stargazers_count}</span>
        <span className="issues">Issues: {open_issues_count}</span>
        Submitted on <time dateTime="2021-06-12" /> by {owner.login}
      </div>
    </article>
  );
};

export default memo(RepoItem);
