const navBtn = document.querySelector(".nav__bars-btn");
const slider = document.querySelector(".nav__slider");

const handleSliderNav = () => {
	slider.classList.toggle("transform-class");
};

navBtn.addEventListener("click", handleSliderNav);
