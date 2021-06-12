import { useEffect } from "react";

const selectReposFromData = items => items.map(({id,name,
  description,stargazers_count,open_issues_count, owner:{login,avatar_url}}) => ({
  id,
  name,
  description,
  stargazers_count,
  open_issues_count,
  owner:{login,avatar_url}
}))

export const useFetchRepos = (setRepos, pageCount) => {
  
  const apiURL = "https://api.github.com/search/repositories?q=created:>2021-05-10&sort=stars&order=desc";

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await fetch(`${apiURL}&page=${pageCount}`);
      const { items } = await response.json();

      setRepos((prevRepos) =>
        [
          ...prevRepos,
          ...selectReposFromData(items)
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