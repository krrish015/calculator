// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON bodies
app.use(express.json());

// Endpoint to handle calculator operations
app.post('/calculate', (req, res) => {
    const { num1, num2, operation } = req.body;
    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
            break;
        default:
            result = 'Error: Invalid operation';
    }

    res.json({ result });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
