import "../style.css";
import { getData } from "./request.js";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

if (id) {
  getData("https://json-api.uz/api/project/job/joblist/" + id)
    .then((data) => console.log(data))
    .catch((error) => {
      console.log(error);
    });
}

console.log("API URL:", "https://json-api.uz/api/project/job/joblist/" + id);
console.log("ID:", id);
