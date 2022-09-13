const btnToggleTheme = document.getElementById("themeToggle"),
	spanMove = document.getElementById("pointThemeToggle"),
	body = document.querySelector("body");

window.onload = () => {
	spanMove.style.display = "none";
	if (D_E.dataset.color === LIGHT) {
		spanMove.classList.add("move");
	}
	spanMove.style.display = "flex";
};

btnToggleTheme.addEventListener("click", changeTheme);

function changeTheme() {
	if (D_E.dataset.color === DARK) {
		localStorage.setItem(COLOR_THEME, LIGHT);
		spanMove.classList.add("move");
		D_E.classList.remove(DARK);
		D_E.classList.add(LIGHT);
		D_E.dataset.color = LIGHT;
	} else if (D_E.dataset.color === LIGHT) {
		localStorage.setItem(COLOR_THEME, DARK);
		spanMove.classList.remove("move");
		D_E.classList.remove(LIGHT);
		D_E.classList.add(DARK);
		D_E.dataset.color = DARK;
	}
}
