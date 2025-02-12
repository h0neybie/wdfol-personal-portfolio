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
  

  // document.addEventListener("DOMContentLoaded", () => {
  //   // Create the Back to Top button
  //   const backToTopButton = document.createElement("button");
  //   backToTopButton.innerHTML = "↑";
  //   backToTopButton.id = "back-to-top";
  //   backToTopButton.style.display = "none";  // Hide button by default
  //   document.body.appendChild(backToTopButton);
  
  //   // Show the button when scrolled near the bottom (within 100px from the bottom)
  //   window.addEventListener("scroll", () => {
  //     // Check if we're near the bottom (100px from the bottom)
  //     if (document.documentElement.scrollHeight - window.scrollY - window.innerHeight <= 100) {
  //       backToTopButton.style.display = "block";  // Show the button
  //     } else {
  //       backToTopButton.style.display = "none";  // Hide the button
  //     }
  //   });
  
  //   // Smooth scroll to top when the button is clicked
  //   backToTopButton.addEventListener("click", () => {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth"  // Ensures smooth scrolling effect
  //     });
  //   });
  // });
  