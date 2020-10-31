import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { fetchRepos, fetchRepo } from "./api";
import { queryCache } from "./cache";

const Repos = React.lazy(() => import("./Repos"));
const Repo = React.lazy(() => import("./Repo"));

function Loader() {
  return <p>Loading</p>;
}

function prefetchRepos() {
  queryCache.prefetchQuery("repos", fetchRepos);
}

function prefetchRepo({ ownerId, repoId }) {
  queryCache.prefetchQuery(["repo", ownerId, repoId], fetchRepo);
}

function App() {
  return (
    <React.Suspense fallback={<Loader />}>
      <div>
        <h1>Welcome</h1>
        <Routes>
          <Route path="/" preload={prefetchRepos} element={<Repos />} />
          <Route
            path=":ownerId/:repoId"
            preload={prefetchRepo}
            element={<Repo />}
          />
        </Routes>
      </div>
    </React.Suspense>
  );
}

export default App;
