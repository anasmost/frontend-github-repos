import { useEffect } from "react";

export const selectReposFromData = ({items}) => items.map(({id,name,
  description,stargazers_count,open_issues_count, pushed_at, owner:{login,avatar_url}}) => ({
  id,
  name,
  description,
  stargazers_count,
  open_issues_count,
  pushed_at,
  owner:{login,avatar_url},
}));

const $30DaysAgo = new Date(Date.now() - 30*24*3600*1000).toISOString()
console.log($30DaysAgo);

export const useFetchRepos = (setRepos, pageCount) => {

  const apiURL = `https://api.github.com/search/repositories?q=created:>${$30DaysAgo}&sort=stars&order=desc`;
  console.log(apiURL);

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await fetch(`${apiURL}&page=${pageCount}`);
      const data = await response.json();

      setRepos((prevRepos) =>
        [
          ...prevRepos,
          ...selectReposFromData(data)
        ]
      );
    };

    try {
      fetchRepos();
    } catch (err) {
      console.error(err);
    }

  }, [pageCount]);

};