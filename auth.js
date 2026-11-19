
// Get the login form and message area
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

// Demo login credentials
const correctUsername = "admin";
const correctPassword = "racing123";

// Listen for form submission
loginForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Get the user's input
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check login credentials
    if (
        username === correctUsername &&
        password === correctPassword
    ) {

        loginMessage.innerHTML =
    '<div class="alert alert-success">Login successful! Redirecting...</div>';

setTimeout(function() {
    window.location.href = "dashboard.html";
}, 1000);

    } else {

        loginMessage.innerHTML =
            '<div class="alert alert-danger">Invalid username or password. Please try again.</div>';

    }

});// Logout function
function logout() {
    window.location.href = "index.html";
}
