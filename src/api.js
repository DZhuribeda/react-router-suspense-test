const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.REACT_APP_GITHUB_USERNAME;

const fetchApi = (url) => {
  return fetch(url, {
    headers: {
      Authorization: `Basic ${btoa(GITHUB_USERNAME + ":" + GITHUB_TOKEN)}`,
    },
  }).then((resp) => resp.json());
};


export function fetchRepo(_, ownerId, repoId) {
  return fetchApi(`https://api.github.com/repos/${ownerId}/${repoId}`);
}


export function fetchRepos() {
  return fetchApi("https://api.github.com/orgs/facebook/repos");
}