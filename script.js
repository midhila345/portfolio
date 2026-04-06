const cards = document.querySelectorAll(".card");
const viewer = document.getElementById("viewer");
const viewerContent = document.getElementById("viewer-content");
const closeBtn = document.querySelector(".close");

// PROJECT IMAGE DATA
const projects = {
  brochure: [
    "https://midhila345.github.io/portfolio/images/brochure/brochure1.JPG",
    "https://midhila345.github.io/portfolio/images/brochure/brochure2.JPG",

  ],
  branding: [
    "https://midhila345.github.io/portfolio/images/branding/branding1.jpg",
      "https://midhila345.github.io/portfolio/images/branding/branding2.jpg", 
      "https://midhila345.github.io/portfolio/images/branding/branding3.jpg",
     "https://midhila345.github.io/portfolio/images/branding/branding4.jpg" ,
      "https://midhila345.github.io/portfolio/images/branding/branding5.jpg" ,
      "https://midhila345.github.io/portfolio/images/branding/branding6.jpg" ,
      "https://midhila345.github.io/portfolio/images/branding/branding7.jpg" ,
      "https://midhila345.github.io/portfolio/images/branding/branding8.jpg" ,
      "https://midhila345.github.io/portfolio/images/branding/branding9.jpg" ,
     "https://midhila345.github.io/portfolio/images/branding/branding10.jpg" ,
      "https://midhila345.github.io/portfolio/images/branding/branding11.jpg" ,
      "https://midhila345.github.io/portfolio/images/branding/branding12.jpg" ,
     "https://midhila345.github.io/portfolio/images/branding/branding13.jpg" ,
      "https://midhila345.github.io/portfolio/images/branding/branding14.jpg" ,
      "https://midhila345.github.io/portfolio/images/branding/branding15.jpg" ,
        
  ],
  posters: [
    "https://midhila345.github.io/portfolio/images/social-media/CUPP3.png",
    "https://midhila345.github.io/portfolio/images/social-media/HEADF.png",
    " https://midhila345.github.io/portfolio/images/social-media/drink.png",

  ],
   d: [
    "https://midhila345.github.io/portfolio/images/3d-models/model1.jpg",
    "https://midhila345.github.io/portfolio/images/3d-models/model2.jpg" ,
    "https://midhila345.github.io/portfolio/images/3d-models/model3.jpg" ,
    "https://midhila345.github.io/portfolio/images/3d-models/model4.jpg" ,
    "https://midhila345.github.io/portfolio/images/3d-models/model5.jpg" ,
    "https://midhila345.github.io/portfolio/images/3d-models/model6.jpg", 
  ],
   ui: [
    "https://midhila345.github.io/portfolio/images/UI Design/ui1.jpg",
      "https://midhila345.github.io/portfolio/images/UI Design/ui2.jpg", 
     "https://midhila345.github.io/portfolio/images/UI Design/ui3.jpg" ,
     "https://midhila345.github.io/portfolio/images/UI Design/ui4.jpg" ,
     "https://midhila345.github.io/portfolio/images/UI Design/ui5.jpg" ,
     "https://midhila345.github.io/portfolio/images/UI Design/ui6.jpg" ,
     "https://midhila345.github.io/portfolio/images/UI Design/ui7.jpg" ,
     "https://midhila345.github.io/portfolio/images/UI Design/ui8.jpg" ,
     "https://midhila345.github.io/portfolio/images/UI Design/ui9.jpg" ,
     "https://midhila345.github.io/portfolio/images/UI Design/ui10.jpg" ,
  ]
};

// CLICK CARD
cards.forEach(card => {
  card.addEventListener("click", () => {
    const project = card.getAttribute("data-project");

    viewerContent.innerHTML = "";

    projects[project].forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      viewerContent.appendChild(img);
    });

    viewer.style.display = "block";
    document.body.style.overflow = "hidden"; 
  });
});

// CLOSE
closeBtn.addEventListener("click", () => {
  viewer.style.display = "none";
  document.body.style.overflow = "auto"; // 🔥 ADD
});

viewer.addEventListener("click", (e) => {
  if (e.target === viewer) {
    viewer.style.display = "none";
    document.body.style.overflow = "auto"; // 🔥 ADD
  }
});
