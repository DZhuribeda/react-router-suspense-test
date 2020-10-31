const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.REACT_APP_GITHUB_USERNAME;

export const fetchApi = (url) => {
  return fetch(url, {
    headers: {
      Authorization: `Basic ${btoa(GITHUB_USERNAME + ":" + GITHUB_TOKEN)}`,
    },
  }).then((resp) => resp.json());
};
