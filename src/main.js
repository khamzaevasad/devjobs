import "./style.css";
import { getData } from "./js/request.js";
import { updateUI } from "./js/updateUI.js";

const cardTemplate = document.getElementById("cardTemplate");
const containerEl = document.querySelector(".cards");
const showMoreBtn = document.getElementById("showMore");
const showLessBtn = document.getElementById("showLess");

let limit = 12;
let url = "https://json-api.uz/api/project/job/joblist";

getData(url + `?limit=${limit}`)
  .then((data) => {
    updateUI(data, cardTemplate, containerEl);
  })
  .catch((error) => {
    console.log(error);
  });

showMoreBtn.addEventListener("click", () => {
  limit += 3;
  showMoreBtn.classList.add("hidden");
  showLessBtn.classList.remove("hidden");

  getData(url + `?limit=${limit}`)
    .then((data) => {
      updateUI(data, cardTemplate, containerEl);
    })
    .catch((error) => {
      console.log(error);
    });
});

showLessBtn.addEventListener("click", () => {
  limit -= 3;
  showMoreBtn.classList.remove("hidden");
  showLessBtn.classList.add("hidden");

  getData(url + `?limit=${limit}`)
    .then((data) => {
      updateUI(data, cardTemplate, containerEl);
    })
    .catch((error) => {
      console.log(error);
    });
});
