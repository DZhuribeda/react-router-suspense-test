import * as React from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { fetchRepo } from "./api";

export default function Repo() {
  const { repoId, ownerId } = useParams();
  const repoQuery = useQuery(["repo", ownerId, repoId], fetchRepo);
  return (
    <div>
      <Link to="/">Back</Link> <br />
      {repoQuery.data && (
        <div>
          <ul>
            <li>Name {repoQuery.data.full_name}</li>
            <li>Stars {repoQuery.data.stargazers_count}</li>
            <li>Watchers {repoQuery.data.watchers_count}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
