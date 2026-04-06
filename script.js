// SELECT ELEMENTS
const cards = document.querySelectorAll(".card img");
const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewer-img");
const closeBtn = document.querySelector(".close");

// OPEN VIEWER
cards.forEach(card => {
  card.addEventListener("click", () => {
    viewer.style.display = "flex";
    viewerImg.src = card.src;
  });
});

// CLOSE VIEWER (click X)
closeBtn.addEventListener("click", () => {
  viewer.style.display = "none";
});

// CLOSE VIEWER (click outside image)
viewer.addEventListener("click", (e) => {
  if (e.target === viewer) {
    viewer.style.display = "none";
  }
});
