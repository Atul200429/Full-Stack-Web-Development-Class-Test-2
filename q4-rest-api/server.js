// Q4. Express - REST API (in-memory Book resource)
const express = require('express');
const app = express();

app.use(express.json());

let books = [
  { id: 1, title: 'Clean Code', author: 'Robert C. Martin' },
  { id: 2, title: 'The Pragmatic Programmer', author: 'Andrew Hunt' }
];
let nextId = 3;

// GET /api/books -> list all books
app.get('/api/books', (req, res) => {
  res.status(200).json(books);
});

// POST /api/books -> create a new book
app.post('/api/books', (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({ error: 'title and author are required' });
  }

  const newBook = { id: nextId++, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

// DELETE /api/books/:id -> delete a book (404 if not found)
app.delete('/api/books/:id', (req, res) => {
  const index = books.findIndex(b => b.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }

  const deleted = books.splice(index, 1)[0];
  res.status(200).json(deleted);
  // Alternatively: res.status(204).send();
});

app.listen(5000, () => console.log('Server running on port 5000'));
