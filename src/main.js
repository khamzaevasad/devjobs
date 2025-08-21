import "./style.css";
import { getData, url } from "./js/request.js";

getData(url)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
