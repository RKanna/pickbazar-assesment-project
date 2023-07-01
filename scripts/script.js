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

window.addEventListener("scroll", function () {
  let sideBar = document.getElementById("side-bar");
  let shopContainer = document.getElementById("shop-container");
  // var scrollPosition = window.scrollY || window.pageYOffset;
  let scrollPosition = window.scrollY;

  let shopContainerTop = shopContainer.offsetTop;
  let shopContainerHeight = shopContainer.offsetHeight;

  if (scrollPosition >= shopContainerTop) {
    sideBar.classList.remove("position-list-box1");
    sideBar.classList.add("position-list-box2");
  } else {
    sideBar.classList.add("position-list-box1");
    sideBar.classList.remove("position-list-box2");
  }

  if (scrollPosition >= shopContainerTop + shopContainerHeight) {
    sideBar.classList.add("position-list-box1");
    sideBar.classList.remove("position-list-box2");
  }
});

let navSearchElement = document.getElementById("nav-search-element");
navSearchElement.style.display = "none";
let rightNavElements = document.getElementById("right-nav-element");
rightNavElements.style.marginLeft = "400px";
let navBar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  let navSearchElement = document.getElementById("nav-search-element");
  let heroSearchBar = document.getElementById("hero-searchbar");
  // var scrollPosition = window.scrollY || window.pageYOffset;
  let scrollPosition = window.scrollY;

  let shopContainerTop = heroSearchBar.offsetTop;
  let shopContainerHeight = heroSearchBar.offsetHeight;

  if (scrollPosition >= shopContainerTop) {
    navSearchElement.style.display = "flex";
    rightNavElements.style.marginLeft = "-90px";
    navBar.classList.add("navbar-border");
    navBar.style.backgroundColor = "white";
  } else {
    navSearchElement.style.display = "none";
    rightNavElements.style.marginLeft = "400px";
    navBar.classList.remove("navbar-border");
    navBar.style.backgroundColor = "#fafafa";
  }

  if (scrollPosition >= shopContainerTop + shopContainerHeight) {
    navSearchElement.style.display = "flex";
  }
});

window.addEventListener("click", function () {
  let navSearchBar = document.getElementById("nav-searchbar");
  let navSearchButton = document.getElementById("nav-search-button");
  navSearchBar.classList.add("search-nav-clicked");
  navSearchButton.classList.add("nav-search-btn-clicked");
});

window.addEventListener("scroll", function () {
  let cartBox = document.getElementById("cartbox");
  let sliderContainer = document.getElementById("slider-container");
  // var scrollPosition = window.scrollY || window.pageYOffset;
  let scrollPosition = window.scrollY;

  let shopContainerTop = cartBox.offsetTop;
  let shopContainerHeight = cartBox.offsetHeight;

  if (scrollPosition >= shopContainerTop) {
    sliderContainer.classList.add("slider-z-index");
  } else {
    sliderContainer.classList.remove("slider-z-index");
  }

  if (scrollPosition >= shopContainerTop + shopContainerHeight) {
    sliderContainer.classList.add("slider-z-index");
  }
});
