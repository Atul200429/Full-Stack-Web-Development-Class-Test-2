// Q7. CORS
/*
Why it happens:
Browsers enforce the Same-Origin Policy. localhost:3000 and localhost:5000
are different origins (different port), so the browser blocks the response
unless the server sends CORS headers like Access-Control-Allow-Origin.
Postman is not a browser, so it does not enforce this policy.
*/
const express = require('express');
const cors = require('cors');
const app = express();

// Allow only the React dev server
app.use(cors({ origin: 'http://localhost:3000' }));
// For quick local dev you can allow everything: app.use(cors());

app.use(express.json());

app.get('/api/books', (req, res) => {
  res.json([{ id: 1, title: 'Clean Code', author: 'Robert C. Martin' }]);
});

app.listen(5000, () => console.log('Server running on port 5000'));
