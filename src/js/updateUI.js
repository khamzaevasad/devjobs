export const updateUI = (data, template, containerEl) => {
  const fragment = document.createDocumentFragment();
  containerEl.innerHTML = "";

  data.forEach((item) => {
    const { id, company, contract, logo, logoBackground, position, postedAt } =
      item;
    const clone = template.content.cloneNode(true);

    const card = clone.querySelector(".job-card");
    const cardLogo = clone.querySelector(".card-logo");
    const companyLogo = clone.querySelector(".company-logo");
    const posted = clone.querySelector(".job-description");
    const jobTime = clone.querySelector(".job-time");
    const jobPosition = clone.querySelector(".job-position");
    const companyName = clone.querySelector(".company");
    const jobLocation = clone.querySelector(".job-location");

    cardLogo.style.backgroundColor = logoBackground;
    companyLogo.src = logo;
    posted.textContent = postedAt;
    jobTime.textContent = contract;
    jobPosition.textContent = position;
    companyName.textContent = company;
    jobLocation.textContent = item.location;
    card.href = `/pages/detail.html?id=${id}`;

    fragment.appendChild(clone);
  });
  containerEl.appendChild(fragment);
};
