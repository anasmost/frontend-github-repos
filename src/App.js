import './App.scss';
import RepoCollection from './components/repo-collection/repo-collection';

function App() {
  return (
    <div className="App">
      <h1 className="title"><span className="star">&#10022;</span> Most Starred Github Repos <span className="star">&#10022;</span></h1>
      <RepoCollection />
    </div>
  );
}

export default App;