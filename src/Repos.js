import * as React from "react";
import { Link } from "react-router-dom";
import { fetchApi } from './fetchApi';

export default function Repos() {
  const [repos, setRepos] = React.useState([]);
  React.useEffect(() => {
    fetchApi("https://api.github.com/orgs/facebook/repos").then(setRepos);
  }, []);
  return (
    <div>
      Repos <br />
      <ul>
        {repos.map((r) => (
            <li key={r.id}>
            <Link to={`/${r.full_name}`}>{r.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}