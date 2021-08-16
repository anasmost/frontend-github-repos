import React, {
  DependencyList,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import RepoItem from "../repo-item/repo-item";
import useFetchRepos, { Repo } from "./useFetchRepos.effect";
import "./repo-collection.scss";
import WithSpinner from "../with-spinner/with-spinner";

const RepoCollection: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const repoCollectionDOMRef = useRef<HTMLElement>(null);

  const handleScroll = useCallback<EventListener>((e) => {
    const target = e.target as HTMLElement;
    if (target.scrollHeight - target.scrollTop < target.clientHeight * 1.5) {
      setIsLoading(true);
      repoCollectionDOMRef.current!.onscroll = null;
    }
  }, [] as DependencyList);

  const repos: Array<Repo> = useFetchRepos(
    () => setIsLoading(false),
    isLoading
  );

  useEffect(
    () => {
      if (!isLoading) {
        repoCollectionDOMRef.current!.onscroll = handleScroll;
        return () => {
          repoCollectionDOMRef.current!.onscroll = null;
        };
      }
    },
    [isLoading] as DependencyList
  );

  return (
    <WithSpinner isLoading={isLoading}>
      <main className="repo-collection" ref={repoCollectionDOMRef}>
        {repos.map((RepoProps) => (
          <RepoItem key={RepoProps.id} {...RepoProps} />
        ))}
      </main>
    </WithSpinner>
  );
};

export default RepoCollection;
