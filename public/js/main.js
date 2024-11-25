(() => {
  // <stdin>
  document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggles = document.querySelectorAll(
      "#darkModeToggle, #darkModeToggleMobile, #darkModeToggleMobileMenu"
    );
    darkModeToggles.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");
        localStorage.setItem(
          "darkMode",
          document.documentElement.classList.contains("dark")
        );
      });
    });
    if (localStorage.getItem("darkMode") === "true" || !localStorage.getItem("darkMode") && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    }
    const mobileMenuButton = document.getElementById("mobileMenuButton");
    const closeMenuButton = document.getElementById("closeMenu");
    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenuButton && closeMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener("click", () => {
        mobileMenu.classList.remove("hidden");
      });
      closeMenuButton.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    }
  });
})();
