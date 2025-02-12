document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
  
    // Initialize Lucide Icons
    lucide.createIcons();
  
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    const isDarkMode = savedTheme === "dark";
  
    if (isDarkMode) {
      body.classList.add("dark-mode");
      themeToggle.innerHTML = '<i data-lucide="sun" class="icon"></i>';
    } else {
      body.classList.remove("dark-mode");
      themeToggle.innerHTML = '<i data-lucide="moon-star" class="icon"></i>';
    }
  
    // Theme Toggle Event Listener
    themeToggle.addEventListener("click", () => {
      const isNowDark = body.classList.toggle("dark-mode");
      localStorage.setItem("theme", isNowDark ? "dark" : "light");
  
      themeToggle.innerHTML = isNowDark
        ? '<i data-lucide="sun" class="icon"></i>'
        : '<i data-lucide="moon-star" class="icon"></i>';
  
      lucide.createIcons();
    });
  });
  