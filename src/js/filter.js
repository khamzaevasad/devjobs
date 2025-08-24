const filterForm = document.querySelector(".form-container");
const cards = document.querySelector(".cards");
const showMoreBtn = document.getElementById("showMore");
const checkbox = document.querySelector(".checkbox-input");

const filterJob = () => {
  const formData = new FormData(filterForm);
  const location = formData.getAll("location");
  const isChecked = checkbox.checked;

  Array.from(cards.children).forEach((item) => {
    const filterLocation = item.dataset.location.includes(location);
    const filterChecked = !isChecked || item.dataset.contract === "Full Time";

    if (filterLocation && filterChecked) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
};

filterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  filterJob();
});

checkbox.addEventListener("change", (e) => {
  e.preventDefault();
  filterJob();
});
