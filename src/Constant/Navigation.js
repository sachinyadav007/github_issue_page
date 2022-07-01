import { OWNER, REPO, WEB_URL } from "../api/constants";
const navigationValues = [
  {
    name: "Code",
    selected: false,
    url: `${WEB_URL}/${OWNER}/${REPO}`,
    imageurl: "https://cdn-icons-png.flaticon.com/128/711/711284.png",
  },
  {
    name: "Issues",
    value: 253,
    selected: true,
    url: `${window.location.origin}`,
    imageurl: "https://cdn-icons-png.flaticon.com/128/711/711284.png",
  },
  {
    name: "Pull Requests",
    value: 72,
    selected: false,
    url: `${WEB_URL}/${OWNER}/${REPO}/pulls`,
    imageurl: "https://cdn-icons-png.flaticon.com/128/711/711284.png",
  },
  {
    name: "Projects",
    value: 2,
    selected: false,
    url: `${WEB_URL}/${OWNER}/${REPO}/projects`,
    imageurl: "https://cdn-icons-png.flaticon.com/128/711/711284.png",
  },
  {
    name: "Insights",
    selected: false,
    url: `${WEB_URL}/${OWNER}/${REPO}/insights`,
    imageurl: "https://cdn-icons-png.flaticon.com/128/2892/2892817.png",
  },
];

export default navigationValues;
