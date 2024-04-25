const passwordInput = document.getElementById('password');
const eyeIcon = document.getElementById('eye-icon');

eyeIcon.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    eyeIcon.src = type === 'password' ? 'openeye.png' : 'closedeye.png';
});

document.getElementById('signin-form').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (!email || !password) {
        event.preventDefault();
        alert('Please enter all fields');
    } else {
        // Redirect to the next page
        window.location.href = 'goals.html'; // Replace 'next-page.html' with the URL of your next page
    }
});

