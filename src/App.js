import * as React from "react";
import { Routes, Route } from "react-router-dom";

const Repos = React.lazy(() => import("./Repos"));
const Repo = React.lazy(() => import("./Repo"));

function Loader() {
  return <p>Loading</p>;
}

function App() {
  return (
    <React.Suspense fallback={<Loader />}>
      <div>
        <h1>Welcome</h1>
        <Routes>
          <Route path="/" element={<Repos />} />
          <Route path=":ownerId/:repoId" element={<Repo />} />
        </Routes>
      </div>
    </React.Suspense>
  );
}

export default App;
