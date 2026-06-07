const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
}

window.toggleTheme = function () {

    document.body.classList.toggle("light");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("light")
            ? "light"
            : "dark"
    );
};