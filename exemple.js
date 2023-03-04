// Select the carousel element and the first image inside it
const carousel = document.querySelector(".car");
const firstImg = carousel.querySelectorAll("img")[0];

// Select the arrow icons and initialize variables for dragging
const arrowIcons = document.querySelectorAll(".wper i");
let isDragStart = false;
let prevPageX, prevScrollLeft;

// Calculate the width of the first image and the total scroll width of the carousel
const firstImgWidth = firstImg.clientWidth + 14;
const scrollWidth = carousel.scrollWidth - carousel.clientWidth;

// Function to show/hide arrow icons depending on the carousel's scroll position
const showHideIcons = () => {
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
};

// Add event listeners to arrow icons to scroll the carousel left or right when clicked
arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 60);
  });
});

// Functions for dragging the carousel left or right
const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  carousel.classList.add("dragging");
  const positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStop = () => {
  carousel.classList.remove("dragging");
  isDragStart = false;
};

// Add event listeners to the carousel for dragging
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
