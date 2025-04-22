const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    db.query(sql, [username, email, password], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'User registered', userId: result.insertId });
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    db.query(sql, [email, password], (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length > 0) {
            res.send({ message: 'Login successful', user: results[0] });
        } else {
            res.status(401).send({ message: 'Invalid credentials' });
        }
    });
});

app.post('/tasks', (req, res) => {
    const { user_id, title, description } = req.body;
    const sql = "INSERT INTO tasks (user_id, title, description) VALUES (?, ?, ?)";
    db.query(sql, [user_id, title, description], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'Task added', taskId: result.insertId });
    });
});

app.get('/tasks/:userId', (req, res) => {
    const sql = "SELECT * FROM tasks WHERE user_id = ?";
    db.query(sql, [req.params.userId], (err, results) => {
        if (err) return res.status(500).send(err);
        res.send(results);
    });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
