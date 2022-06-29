window.onload = () => {
	if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
		// dark mode
		localStorage.setItem("dark", "1");
		console.log(localStorage.getItem("dark"));
	}

	//To watch for changes:

	window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
		const newColorScheme = e.matches ? "dark" : "light";
		console.log(newColorScheme);
	});
	// localStorage.setItem()
};

const btnToggleTheme = document.getElementById("themeToggle"),
	spanMove = document.getElementById("pointThemeToggle");

btnToggleTheme.addEventListener("click", changeTheme);

function changeTheme() {
	spanMove.classList.toggle("move");
	console.log(spanMove);
}
console.log(btnToggleTheme);
