// JavaScript code to check if passwords match
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match");
        event.preventDefault();
    }
});
