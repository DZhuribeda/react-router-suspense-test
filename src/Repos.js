import * as React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchRepos } from "./api";

export default function Repos() {
  const reposQuery = useQuery("repos", fetchRepos);
  return (
    <div>
      Repos <br />
      <ul>
        {reposQuery.data.map((r) => (
          <li key={r.id}>
            <Link to={`/${r.full_name}`}>{r.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
