document.addEventListener("DOMContentLoaded", function () {
    // Check if the button already exists to avoid duplication
    if (!document.getElementById("dark-mode-toggle")) {
        const darkModeToggle = document.createElement("button");
        darkModeToggle.innerText = "Dark Mode";
        darkModeToggle.id = "dark-mode-toggle";
        document.body.appendChild(darkModeToggle); // Add button to body
    }

    const darkModeToggle = document.getElementById("dark-mode-toggle");

    // Apply previously saved theme preference
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    // Toggle dark mode on button click
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Save theme preference in localStorage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
});
