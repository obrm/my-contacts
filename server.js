const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.use('/api/users', require('./routs/users'));
app.use('/api/contacts', require('./routs/contacts'));
app.use('/api/auth', require('./routs/auth'));

// Server static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
