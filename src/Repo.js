import * as React from "react";
import { Link, useParams } from "react-router-dom";
import { fetchApi } from "./fetchApi";

export default function Repo() {
  const { repoId, ownerId } = useParams();
  const [repo, setRepo] = React.useState(null);
  React.useEffect(() => {
    setRepo(null);
    fetchApi(`https://api.github.com/repos/${ownerId}/${repoId}`).then(setRepo);
  }, [ownerId, repoId]);
  return (
    <div>
      <Link to="/">Back</Link> <br />
      {repo && (
        <div>
          <ul>
            <li>Name {repo.full_name}</li>
            <li>Stars {repo.stargazers_count}</li>
            <li>Watchers {repo.watchers_count}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
