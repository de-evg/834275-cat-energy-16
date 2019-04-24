// Переключение главного меню
var navMain = document.querySelector(".main-menu");
var navToggle = document.querySelector(".burger-menu");

navMain.classList.remove("main-menu--no-js");
navToggle.classList.remove("burger-menu--no-js");

navToggle.addEventListener("click", function() {
  if (navToggle.classList.contains("burger-menu--closed")) {
    navToggle.classList.remove("burger-menu--closed");
    navToggle.classList.add("burger-menu--opened");
  } else {
    navToggle.classList.add("burger-menu--closed");
    navToggle.classList.remove("burger-menu--opened");
  }

  if (navMain.classList.contains("main-menu--closed")) {
    navMain.classList.remove("main-menu--closed");
    navMain.classList.add("main-menu--opened");
  } else {
    navMain.classList.add("main-menu--closed");
    navMain.classList.remove("main-menu--opened");
  }
});

// Переключение слайдера в мобильной версии
var sliderButton = document.querySelectorAll(".slider__button");
var sliderToggle = document.querySelector(".slider__toggle-item")
var sliderImage = document.querySelectorAll(".slider__image");

sliderButton[1].addEventListener("click", function() {
  if (!sliderButton[1].classList.contains("slider__button--current")) {
    sliderButton[0].classList.remove("slider__button--current");
    sliderButton[1].classList.add("slider__button--current");
    sliderToggle.classList.toggle("slider__toggle-item--right");
    if (!sliderImage[1].classList.contains("slider__image--current")) {
      sliderImage[0].classList.remove("slider__image--current");
      sliderImage[1].classList.add("slider__image--current");
    };
  }
})

sliderButton[0].addEventListener("click", function() {
  if (!sliderButton[0].classList.contains("slider__button--current")) {
    sliderButton[1].classList.remove("slider__button--current");
    sliderButton[0].classList.add("slider__button--current");
    sliderToggle.classList.toggle("slider__toggle-item--right");
    if (!sliderImage[0].classList.contains("slider__image--current")) {
      sliderImage[1].classList.remove("slider__image--current");
      sliderImage[0].classList.add("slider__image--current");
    };
  }
})




