import React, {
  DependencyList,
  useEffect,
  useState,
} from "react";

export type Repo = {
  id: string;
  name: string;
  description: string;
  stargazers_count: number;
  open_issues_count: number;
  pushed_at: string;
  owner: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
};
type GithubRepo = Repo & object;
type PageState = {
  pageCount: number;
  repos: Array<Repo>;
};

const $30DaysAgo: string = new Date(
  Date.now() - 30 * 24 * 3600 * 1000
).toISOString();
const apiURL: string = `https://api.github.com/search/repositories?q=created:>${$30DaysAgo}&sort=stars&order=desc`;

const selectReposFromData = ({
  items,
}: {
  items: Array<GithubRepo>;
}): Array<Repo> =>
  items?.map(
    ({
      id,
      name,
      description,
      stargazers_count,
      open_issues_count,
      pushed_at,
      owner: { login, avatar_url, html_url },
    }) => ({
      id,
      name,
      description,
      stargazers_count,
      open_issues_count,
      pushed_at,
      owner: { login, avatar_url, html_url },
    })
  );

const useFetchRepos = (
  callback: () => void,
  isLoading: boolean
): Array<Repo> => {
  const [page, setPage] = useState<PageState>({
    pageCount: 0,
    repos: [],
  });

  useEffect(
    (): void => {
      if (isLoading) {
        const fetchRepos = async () => {
          const response: Response = await fetch(
            `${apiURL}&page=${page.pageCount + 1}`
          );

          if (response.status === 200) {
            const data = await response.json();

            setPage(({ pageCount, repos }) => ({
              pageCount: ++pageCount,
              repos: [...repos, ...(selectReposFromData(data) ?? [])],
            }));
          }

          callback();
        };

        fetchRepos();
      }
    },
    [isLoading] as DependencyList
  );

  return page.repos;
};

export default useFetchRepos;
