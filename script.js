const cards = document.querySelectorAll(".card");
const viewer = document.getElementById("viewer");
const viewerContent = document.getElementById("viewer-content");
const closeBtn = document.querySelector(".close");

// PROJECT IMAGE DATA
const projects = {
  brochure: [
    "images/brochure/brochure1.JPG",
    "images/brochure/brochure2.JPG"
  ],
  branding: [
    "images/branding/branding1.jpg",
    "images/branding/branding2.jpg",
    "images/branding/branding3.jpg",
    "images/branding/branding4.jpg",
    "images/branding/branding5.jpg",
    "images/branding/branding6.jpg",
    "images/branding/branding7.jpg",
    "images/branding/branding8.jpg",
    "images/branding/branding9.jpg",
    "images/branding/branding10.jpg",
    "images/branding/branding11.jpg",
    "images/branding/branding12.jpg",
    "images/branding/branding13.jpg",
    "images/branding/branding14.jpg",
    "images/branding/branding15.jpg"
  ],
  posters: [
    "images/social-media/CUPP3.png",
    "images/social-media/HEADF.png",
    "images/social-media/drink.png"
  ],
  "3d": [
    "images/3d-models/model1.jpg",
    "images/3d-models/model2.jpg",
    "images/3d-models/model3.jpg",
    "images/3d-models/model4.jpg",
    "images/3d-models/model5.jpg",
    "images/3d-models/model6.jpg"
  ],
  ui: [
    "images/UI Design/ui1.jpg",
    "images/UI Design/ui2.jpg",
    "images/UI Design/ui3.jpg",
    "images/UI Design/ui4.jpg",
    "images/UI Design/ui5.jpg",
    "images/UI Design/ui6.jpg",
    "images/UI Design/ui7.jpg",
    "images/UI Design/ui8.jpg",
    "images/UI Design/ui9.jpg",
    "images/UI Design/ui10.jpg"
  ]
};

// CLICK CARD
cards.forEach(card => {
  card.addEventListener("click", () => {
    const project = card.getAttribute("data-project");

    viewerContent.innerHTML = ""; // clear old

    projects[project].forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      viewerContent.appendChild(img);
    });

    viewer.style.display = "block";
  });
});

// CLOSE
closeBtn.addEventListener("click", () => {
  viewer.style.display = "none";
});

// CLOSE on background click
viewer.addEventListener("click", (e) => {
  if (e.target === viewer) {
    viewer.style.display = "none";
  }
});
