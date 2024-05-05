import React from "react";
import "./App.scss";
import RepoCollection from "./components/repo-collection/repo-collection";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <h1 className="title">
        <span className="star">&#10022;</span> Most Starred Github Repos{" "}
        <span className="star">&#10022;</span>
      </h1>
      <RepoCollection />
      <footer className="footer">
        <address>
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <a href="https://anasmost-bio.vercel.app/" target="_blank">
            Always Up to date
            <span>
              <img
                src="https://anasmost-bio.vercel.app/_next/static/media/favicon.91b328e8.ico"
                alt="Anas Mostafa"
              />
              &copy;
            </span>
            {new Date().getFullYear()}
          </a>
        </address>
      </footer>
    </div>
  );
};

export default App;
