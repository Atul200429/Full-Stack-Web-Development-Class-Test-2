// Q3. Express - Middleware & Routing
const express = require('express');
const app = express();

app.use(express.json());

// (a) Custom middleware: requireAuth
function requireAuth(req, res, next) {
  const apiKey = req.header('x-api-key');
  if (!apiKey || apiKey !== 'secret123') {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

// (b) GET route is PUBLIC (no middleware)
app.get('/api/books', (req, res) => {
  res.json([{ id: 1, title: 'Sample Book', author: 'Unknown' }]);
});

// requireAuth applied ONLY to the POST route
app.post('/api/books', requireAuth, (req, res) => {
  const { title, author } = req.body;
  res.status(201).json({ id: Date.now(), title, author });
});

app.listen(5000, () => console.log('Server running on port 5000'));
