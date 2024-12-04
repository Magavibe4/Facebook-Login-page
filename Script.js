// Get form and message elements
const form = document.getElementById('loginForm');
const message = document.getElementById('message');

// Handle form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent page reload

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simulate saving data and display a success message
  console.log(`Username: ${username}, Password: ${password}`);
  message.textContent = "You have successfully logged in!";
});
