'use strict';

// Function to simulate progress bar
function startProgress() {
    var progressBar = document.getElementById('progressBar');
    var width = 0;
    var interval = setInterval(frame, 50); // Update every 50ms

    function frame() {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + '%';
        }
    }
}

// Function to handle login form submission
function handleLogin(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simulate login validation
    if (username === "user" && password === "password") {
        alert('Login successful!');
        window.location.href = "user.html"; // Redirect to user page on successful login
    } else {
        alert('Invalid credentials, please try again.');
    }
    return false; // Prevent form from submitting
}
