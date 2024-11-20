const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const usersCollection = require('./database');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the backend server!');
});

// Register route
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password, confirm_password, tc } = req.body;
    if (password !== confirm_password) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { name, email, password: hashedPassword, tc };
    await usersCollection.insertOne(newUser);
    res.status(201).json({ message: 'Successfully registered!' });
  } catch (error) {
    res.status(500).json({ message: 'Registration failed' });
  }
});

// Login route
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await usersCollection.findOne({ email });

    console.log("User: ", user);

    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ userId: user._id }, 'your-jwt-secret', { expiresIn: '1h' });
      res.status(200).json({ message: 'Successfully logged in!', token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Login failed' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
