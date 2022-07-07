window.onload = () => {
	if (
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark)").matches &&
		localStorage.getItem("theme") === "dark"
	) {
		// dark mode
		localStorage.setItem("theme", "dark");
		// console.log(localStorage.getItem("theme"));
	}

	//To watch for changes:

	window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
		const newColorScheme = e.matches ? "dark" : "light";
		console.log(newColorScheme);
	});
	// localStorage.setItem()
};

const btnToggleTheme = document.getElementById("themeToggle"),
	spanMove = document.getElementById("pointThemeToggle"),
	elementHTML = document.querySelector("html");

btnToggleTheme.addEventListener("click", changeTheme);

function changeTheme() {
	elementHTML.classList.toggle();
	spanMove.classList.toggle("move");
	console.log(spanMove);
}
console.log(btnToggleTheme);
