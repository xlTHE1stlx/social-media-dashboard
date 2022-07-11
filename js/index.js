window.onload = () => {
	if (!localStorage.getItem("theme")) {
		if (
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme)").media !== "not all" &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
		) {
			localStorage.setItem("theme", "dark");
			document.querySelector("body").classList.add("dark");
		} else {
			localStorage.setItem("theme", "light");
			document.querySelector("#pointThemeToggle").classList.add("move");
		}
	} else {
		if (localStorage.getItem("theme") === "dark") {
			document.querySelector("body").classList.add("dark");
		} else {
			document.querySelector("body").classList.remove("dark");
			document.querySelector("#pointThemeToggle").classList.add("move");
		}
	}
};

const btnToggleTheme = document.getElementById("themeToggle"),
	spanMove = document.getElementById("pointThemeToggle"),
	body = document.querySelector("body");

btnToggleTheme.addEventListener("click", changeTheme);

function changeTheme() {
	if (localStorage.getItem("theme") === "dark") {
		localStorage.setItem("theme", "light");
		spanMove.classList.add("move");
	} else {
		localStorage.setItem("theme", "dark");
		spanMove.classList.remove("move");
	}

	if (
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme)").media !== "not all" &&
		window.matchMedia("(prefers-color-scheme: dark)").matches &&
		localStorage.getItem("theme") === "dark"
	) {
		body.classList.add("dark");
	} else {
		body.classList.remove("dark");
	}

	//To watch for changes:

	window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
		const newColorScheme = e.matches ? "dark" : "light";
		console.log(newColorScheme);
	});
}
