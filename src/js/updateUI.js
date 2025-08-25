export const updateUI = (data, template, containerEl) => {
  const fragment = document.createDocumentFragment();
  containerEl.innerHTML = "";

  const locationList = [...new Set(data.map((item) => item.location))];

  const locationContainer = document.querySelector(".location-container");

  locationList.forEach((item) => {
    const optionEl = document.createElement("option");
    optionEl.value = item;
    optionEl.textContent = item;
    locationContainer.appendChild(optionEl);
  });

  data.forEach((item) => {
    const { id, company, contract, logo, logoBackground, position, postedAt } =
      item;
    const clone = template.content.cloneNode(true);

    const card = clone.querySelector(".job-card");
    const cardLogo = clone.querySelector(".card-logo");
    const companyLogo = clone.querySelector(".company-logo");
    const posted = clone.querySelector(".job-description");
    const jobPosition = clone.querySelector(".job-position");
    const companyName = clone.querySelector(".company");
    const jobLocation = clone.querySelector(".job-location");
    const joblist = clone.querySelector(".job-list");
    // const jobInfo = clone.querySelector(".job-info");

    joblist.dataset.contract = contract;
    joblist.dataset.title = position;
    joblist.dataset.location = item.location;
    cardLogo.style.backgroundColor = logoBackground;
    companyLogo.src = logo;
    posted.textContent = `${postedAt} || ${contract}`;
    jobPosition.textContent = position;
    companyName.textContent = company;
    jobLocation.textContent = item.location;
    card.href = `/detail.html?id=${id}`;

    fragment.appendChild(clone);
  });
  containerEl.appendChild(fragment);
};

export const updateDetail = (data) => {
  const {
    company,
    contract,
    description,
    location,
    logo,
    logoBackground,
    position,
    postedAt,
    role,
    requirements,
    website,
    apply,
  } = data;

  const requirementItems = data.requirements.items;
  const roleItems = data.role.items;

  const logos = document.querySelector(".logos");
  const logoBox = document.querySelector(".job-logo");
  const companyName = document.querySelector(".company-name");
  const companyLink = document.querySelector(".company-link");
  const companyWebSite = document.querySelector(".company-btn");
  const mobileCardLogoBox = document.querySelector(".mobile-card-logo");
  const companyPage = document.querySelector(".company-page");
  const mobileCompanyName = document.querySelector(".mobile-company-name");
  const mobileCompanyBtn = document.querySelector(".mobileCompanyBtn");
  const jobDescription = document.querySelector(".job-description");
  const _position = document.querySelector(".position");
  const _location = document.querySelector(".location");
  const applyBtn = document.querySelector(".apply-btn");
  const mobileApplyBtn = document.querySelector(".mobile-apply-btn");
  const jobSubtitle = document.querySelector(".job-subtitle");
  const requirementsContent = document.getElementById("requirementsContent");
  const roleContent = document.getElementById("role-content");
  const footerPosition = document.getElementById("footer-position");
  const footerBtn = document.querySelector(".footer-btn");
  const mobileLogo = document.getElementById("mobileLogo");

  logos.src = logo;
  logoBox.style.backgroundColor = logoBackground;
  companyName.textContent = company;
  companyLink.textContent = `${company}.com`;
  companyWebSite.href = website;
  mobileCardLogoBox.style.backgroundColor = logoBackground;
  mobileLogo.src = data.logo;
  companyPage.textContent = `${company}.com`;
  mobileCompanyName.textContent = company;
  mobileCompanyBtn.href = website;
  jobDescription.textContent = `${postedAt}  * ${contract}`;
  _position.textContent = position;
  _location.textContent = location;
  applyBtn.href = apply;
  mobileApplyBtn.href = apply;
  jobSubtitle.textContent = description;
  requirementsContent.textContent = requirements.content;
  roleContent.textContent = role.content;
  footerPosition.textContent = position;
  footerBtn.href = apply;

  const requirementListContainer = document.getElementById(
    "requirement-list-container"
  );

  requirementItems.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("list");
    const img = document.createElement("img");
    img.src = "../../assets/Oval.png";
    img.alt = "circle";
    img.classList.add("dot");
    const p = document.createElement("p");
    p.classList.add("job-subtitle");
    p.textContent = item;
    li.append(img, p);
    requirementListContainer.appendChild(li);
  });

  const roleListContainer = document.getElementById("roleListContainer");

  roleItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.classList.add("list");
    const span = document.createElement("span");
    span.classList.add("list-num");
    span.textContent = index + 1;
    const p = document.createElement("p");
    p.classList.add("job-subtitle");
    p.textContent = item;
    li.append(span, p);
    roleListContainer.appendChild(li);
  });
};
