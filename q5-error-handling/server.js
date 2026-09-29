// Q5. Debugging & Error Handling
const express = require('express');
const app = express();

const books = [
  { id: 1, title: 'Clean Code', author: 'Robert C. Martin' }
];

/*
BUG (original code):
  const book = books.find(b => b.id == req.params.id);
  res.json(book.title);

books.find() returns undefined when no book matches. Accessing
undefined.title throws a TypeError, which is not handled, so the request
crashes / returns a 500 HTML error instead of a clean JSON error.
*/

// FIXED
app.get('/api/books/:id', (req, res) => {
  const book = books.find(b => b.id == req.params.id);

  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }

  res.json(book.title);
});

app.listen(5000, () => console.log('Server running on port 5000'));
