const filterForm = document.querySelector(".form-container");
const cards = document.querySelector(".cards");
const showMoreBtn = document.getElementById("showMore");
const checkbox = document.querySelector(".checkbox-input");

filterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const location = formData.getAll("location");
  const contract = formData.get("Full Time");

  Array.from(cards.children).forEach((item) => {
    if (item.dataset.location.includes(location)) {
      item.style.display = "flex";
      showMoreBtn.classList.add("hidden");
    } else {
      item.style.display = "none";
    }
  });
});
