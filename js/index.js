window.onload = () => {
	// if (!localStorage.getItem("theme")) {
	// 	if (
	// 		window.matchMedia &&
	// 		window.matchMedia("(prefers-color-scheme)").media !== "not all" &&
	// 		window.matchMedia("(prefers-color-scheme: dark)").matches
	// 	) {
	// 		localStorage.setItem("theme", "dark");
	// 		document.querySelector("body").classList.add("dark");
	// 	} else {
	// 		localStorage.setItem("theme", "light");
	// 		document.querySelector("#pointThemeToggle").classList.add("move");
	// 	}
	// } else {
	// 	if (localStorage.getItem("theme") === "dark") {
	// 		document.querySelector("body").classList.add("dark");
	// 	} else {
	// 		document.querySelector("body").classList.remove("dark");
	// 		document.querySelector("#pointThemeToggle").classList.add("move");
	// 	}
	// }
	// console.log("load");
	// console.log(
	// 	doc.addEventListener("permanentcolorscheme", (event) => {
	// 		console.log(event.detail);
	// 	})
	// );
	// console.log(
	// 	doc.addEventListener("colorschemechange", (event) => {
	// 		console.log(event);
	// 	})
	// );
};

const btnToggleTheme = document.getElementById("themeToggle"),
	spanMove = document.getElementById("pointThemeToggle"),
	body = document.querySelector("body");

btnToggleTheme.addEventListener("click", changeTheme);

function changeTheme() {
	const DARK = "dark",
		LIGHT = "light";
	if (localStorage.getItem(COLOR_THEME) === DARK) {
		localStorage.setItem(COLOR_THEME, LIGHT);
		spanMove.classList.add("move");
		D_E.classList.remove(DARK);
		D_E.classList.add(LIGHT);
		D_E.dataset.color = LIGHT;
	} else {
		localStorage.setItem(COLOR_THEME, DARK);
		spanMove.classList.remove("move");
		D_E.classList.remove(LIGHT);
		D_E.classList.add(DARK);
		D_E.dataset.color = DARK;
	}

	// if (D_E.classList.includes(LIGHT))

	// 	//To watch for changes:

	// 	window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
	// 		const newColorScheme = e.matches ? "dark" : "light";
	// 		console.log(newColorScheme);
	// 	});
}
