const searchTerm = document.querySelector(".searchTerm");
const cards = document.querySelector(".cards");
const message = document.querySelector(".user-message");
const position = document.getElementById("position");
const loadBtn = document.querySelector(".load-more-btn");

searchTerm.addEventListener("input", () => {
  const searchValue = searchTerm.value.toLowerCase();

  Array.from(cards.children).forEach((item) => {
    if (item.dataset.title.toLowerCase().includes(searchValue)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
  if (cards.innerText.trim() == "") {
    message.classList.remove("hidden");
    position.textContent = searchValue;
    loadBtn.classList.add("hidden");
  } else {
    message.classList.add("hidden");
    loadBtn.classList.remove("hidden");
  }
});
