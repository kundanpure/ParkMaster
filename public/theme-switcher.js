console.log("Script loaded");

document.addEventListener("DOMContentLoaded", () => {
  const currentTheme = getTheme();
  changeTheme(currentTheme);
});
function changePageTheme(newTheme, oldTheme) {
    // Update local storage with the new theme
    setTheme(newTheme);

    // Remove the old theme, if any
    if (oldTheme) {
        document.documentElement.classList.remove(oldTheme);
    }

    // Set the new theme
    document.documentElement.classList.add(newTheme);

    // Update the text of the button to reflect the new theme
    const buttonSpan = document.querySelector("#theme_change_button span");
    if (buttonSpan) {
        buttonSpan.textContent = newTheme === "light" ? "Dark" : "Light";
    }
}
