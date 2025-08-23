import "../style.css";
import "./mode.js";
import { getData } from "./request.js";
import { updateDetail } from "./updateUI.js";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

if (id) {
  getData("https://json-api.uz/api/project/job/joblist/" + id)
    .then((data) => {
      updateDetail(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
