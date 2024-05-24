// Function to simulate progress bar
function startProgress() {
    let progressBar = document.getElementById('progressBar');
    let width = 0;
    let interval = setInterval(frame, 100); // Update every 100ms

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
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Perform login logic here (e.g., validate input, authenticate with server)
    console.log('Username:', username);
    console.log('Password:', password);

    // Display a success message or handle login response
    alert('Login successful!');
    return false; // Prevent form from submitting
}
