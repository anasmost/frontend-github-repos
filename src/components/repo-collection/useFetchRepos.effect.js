import { useEffect } from "react";

const $30DaysAgo = new Date(Date.now() - 30 * 24 * 3600 * 1000).toISOString();
const apiURL = `https://api.github.com/search/repositories?q=created:>${$30DaysAgo}&sort=stars&order=desc`;
const selectReposFromData = ({ items }) =>
  items.map(
    ({
      id,
      name,
      description,
      stargazers_count,
      open_issues_count,
      pushed_at,
      owner: { login, avatar_url },
    }) => ({
      id,
      name,
      description,
      stargazers_count,
      open_issues_count,
      pushed_at,
      owner: { login, avatar_url },
    })
  );

const useFetchRepos = (setRepos, pageCount) => {
  useEffect(() => {
    const fetchRepos = async () => {
      const response = await fetch(`${apiURL}&page=${pageCount}`);
      const data = await response.json();

      setRepos((prevRepos) => [...prevRepos, ...selectReposFromData(data)]);
    };

    try {
      fetchRepos();
    } catch (err) {
      console.error(err);
    }
  }, [pageCount]);
};

export default useFetchRepos;
