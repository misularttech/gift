document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Save username and password to localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // Play sound notification
    var audio = new Audio('notification.mp3');
    audio.play();

    alert("Login successful! Username and password saved.");
});

document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key === "o") {
        window.location.href = "success.html"; // Corrected spelling of "success.html"
    }
});
