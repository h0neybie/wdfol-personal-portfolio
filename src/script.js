document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    
    // Initialize Lucide Icons
    lucide.createIcons();

    // Check for saved theme preference
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        themeToggle.innerHTML = '<i data-lucide="sun" class="w-6 h-6 text-white"></i>';
        themeToggle.classList.replace("from-pink-400", "from-gray-800");
        themeToggle.classList.replace("to-green-400", "to-gray-900");
    }

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeToggle.innerHTML = '<i data-lucide="sun" class="w-6 h-6 text-white"></i>';
            themeToggle.classList.replace("from-pink-400", "from-gray-800");
            themeToggle.classList.replace("to-green-400", "to-gray-900");
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.innerHTML = '<i data-lucide="moon-star" class="w-6 h-6 text-white"></i>';
            themeToggle.classList.replace("from-gray-800", "from-pink-400");
            themeToggle.classList.replace("to-gray-900", "to-green-400");
        }

        // Re-render icons after updating
        lucide.createIcons();
    });
});
