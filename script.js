function validatedashboard() {
    var username = document.getElementById('text').value;
    var password = document.getElementById('password').value;


    if (username === 'Text' && password === 'password') {
        alert('Login successful!');
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password');
    }
}