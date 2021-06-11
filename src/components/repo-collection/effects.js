import { useEffect } from "react";

export const useFetchRepos = (setRepos, pageCount) => {
  
  const apiURL = "https://api.github.com/search/repositories?q=created:>2021-05-10&sort=stars&order=desc";

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await fetch(`${apiURL}&page=${pageCount}`);
      const { items } = await response.json();

      const newRepos = items.map(({ id, name, description }) => ({
        id,
        name,
        description,
      }))

      setRepos((prevRepos) =>
        [...prevRepos, ...newRepos]
      );
    };

    try {
      fetchRepos();
    } catch (err) {
      console.error(err);
    }



  }, [pageCount]);

};