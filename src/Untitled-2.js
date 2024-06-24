// server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Dummy user data
let users = [
    { id: 1, username: 'user1', password: 'password1', name: 'User One' },
    { id: 2, username: 'user2', password: 'password2', name: 'User Two' }
];

// Dummy product data
let products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 }
];

// Middleware
app.use(bodyParser.json());

// User login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    return res.json({ user });
});

// Get user profile
app.get('/profile/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const user = users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    return res.json({ user });
});

// Add item to cart
app.post('/cart/add', (req, res) => {
    // Implement adding to cart logic here
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
