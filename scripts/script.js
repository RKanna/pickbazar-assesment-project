"use strict";
const sectionSlider = document.querySelector(".slider-main-container");
const imgContainer = document.getElementById("slideContainer");
const imagesAll = document.querySelectorAll(".image1");
const buttonsAll = document.querySelectorAll(".button");

let imageIndex = 0;

const slideImage = () => {
  imgContainer.style.transform = `translate(-${imageIndex * 100}%)`;
};

const updateClick = (e) => {
  const targetId = e.target.id;
  if (targetId === "previous") {
    imageIndex = imageIndex === 0 ? imagesAll.length - 1 : imageIndex - 1;
  } else if (targetId === "next") {
    imageIndex = imageIndex === imagesAll.length - 1 ? 0 : imageIndex + 1;
  }
  slideImage();
};

buttonsAll.forEach((button) => button.addEventListener("click", updateClick));

sectionSlider.addEventListener("mouseover", () => {
  buttonsAll.forEach((button) => (button.style.display = "block"));
});

sectionSlider.addEventListener("mouseleave", () => {
  buttonsAll.forEach((button) => (button.style.display = "none"));
});
