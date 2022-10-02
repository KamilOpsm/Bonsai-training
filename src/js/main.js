const navBtn = document.querySelector(".nav__bars-btn");
const slider = document.querySelector(".nav__slider");
const mainItem = document.querySelectorAll(".main__item");
const mainTextBox = document.querySelector(".main__text-box");

const handleSliderNav = () => {
	slider.classList.toggle("transform-class");
};

navBtn.addEventListener("click", handleSliderNav);
