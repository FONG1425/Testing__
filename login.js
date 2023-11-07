// Simulated user and admin data (you should use a secure backend for this)
const users = [
    { username: 'admin', password: 'admin123' },
    { username: 'user1', password: 'password' },
];

const adminData = [];


function signup() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // You can save the username and password or perform other actions here.

    // Display a success message.
    alert('Sign-up Successful! You can now log in with your credentials.');
}

// Login function
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert('Login successful');
    } else {
        alert('Login failed');
    }
}

// Create admin account
function createAdmin() {
    const adminUsername = document.getElementById('admin-username').value;
    const adminPassword = document.getElementById('admin-password').value;

    adminData.push({ username: adminUsername, password: adminPassword });
    alert('Admin account created');
}

// Add member details
function addMember() {
    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;
    const address = document.getElementById('address').value;

    const memberList = document.getElementById('members');
    const listItem = document.createElement('li');
    listItem.innerHTML = `Name: ${name}, Birthdate: ${birthdate}, Address: ${address}`;
    memberList.appendChild(listItem);
}

// Export member details as a PDF (not implemented here, you would need a PDF library)
function exportToPDF() {
    // You would need a PDF generation library here to export member details as a PDF
    // Example: Use 'pdf-lib' library
    // const { PDFDocument, rgb } = require('pdf-lib');
}
