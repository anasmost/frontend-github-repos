import { useEffect, useState } from "react";

const $30DaysAgo = new Date(Date.now() - 30 * 24 * 3600 * 1000).toISOString();
const apiURL = `https://api.github.com/search/repositories?q=created:>${$30DaysAgo}&sort=stars&order=desc`;
const selectReposFromData = ({ items }) =>
  items?.map(
    ({
      id,
      name,
      description,
      stargazers_count,
      open_issues_count,
      pushed_at,
      owner: { login, avatar_url,html_url },
    }) => ({
      id,
      name,
      description,
      stargazers_count,
      open_issues_count,
      pushed_at,
      owner: { login, avatar_url,html_url },
    })
  );

const useFetchRepos = (callback, isLoading) => {
  const [state, setState] = useState({
    pageCount: 0,
    repos: [],
  });

  useEffect(() => {
    if (isLoading) {
      const fetchRepos = async () => {
        const response = await fetch(`${apiURL}&page=${state.pageCount + 1}`);
        if (response.status === 200) {
          const data = await response.json();

          setState(({ pageCount, repos }) => ({
            pageCount: ++pageCount,
            repos: [...repos, ...(selectReposFromData(data) ?? [])],
          }));
        }

        callback();
      };

      fetchRepos();
    }
  }, [isLoading]);

  return state.repos;
};

export default useFetchRepos;
