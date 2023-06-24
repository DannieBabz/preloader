const mynav = document.getElementById("myNav");
const hamBtn = document.getElementById("hamBtn");
const body = document.getElementById("body");
const preLoader = document.getElementById("preloader");
const loader = document.getElementById("loader");

hamBtn.addEventListener("click", function () {
	mynav.classList.toggle("hidden");
	body.classList.toggle("overflow-y-hidden");
});
