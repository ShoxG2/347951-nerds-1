var link = document.querySelector(".contacts .btn");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var login = popup.querySelector("[name=username]");
var password = popup.querySelector("[name=email]");
var form = popup.querySelector("form");
var overlay = document.querySelector(".modal-overlay");

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");
	overlay.classList.add("modal-overlay-show");
	username.focus();
});
close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
	overlay.classList.remove("modal-overlay-show");
	popup.classList.remove("modal-error");
});
form.addEventListener("submit", function(event) {
	if (!name.value || !email.value) {
	event.preventDefault();
	popup.classList.remove("modal-error");
	popup.offsetWidth = popup.offsetWidth;
	popup.classList.add("modal-error");
} else {
	localStorage.setItem("login", login.value);
	}
});
window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-content-show")) {
		popup.classList.remove("modal-error");
		popup.classList.remove("modal-content-show");
		overlay.classList.remove("modal-overlay-show");
		popup.classList.remove("modal-error");
		}
	}
});
overlay.addEventListener("click", function(event) {
	if (popup.classList.contains("modal-content-show")) {
		popup.classList.remove("modal-content-show");
		overlay.classList.remove("modal-overlay-show");
		popup.classList.remove("modal-error");
		}
})
