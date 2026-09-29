# Full Stack Web Development — Class Test 2

**COER University, Roorkee — Department of Computer Science & Engineering**
Duration: 1 Hour | Maximum Marks: 20

This repository contains the solutions to **Class Test 2** (Node.js, Express.js, REST APIs, React, CORS).
Each question is in its own folder.

## Folder Structure

```
├── q1-event-loop/          # Node.js event loop output + justification
├── q2-modules/             # calc.js + app.js (module.exports / require)
├── q3-middleware-routing/  # requireAuth middleware on POST only
├── q4-rest-api/            # In-memory Book REST API (GET, POST, DELETE)
├── q5-error-handling/      # Bug fix for GET /api/books/:id
├── q6-react-booklist/      # BookList component (loading / error / success)
├── q7-cors/                # CORS explanation + Express fix
├── package.json
└── README.md
```

## Questions Covered

| Q | Topic | File |
|---|-------|------|
| 1 | Node.js — The Event Loop | `q1-event-loop/eventLoop.js` |
| 2 | Node.js — Modules | `q2-modules/calc.js`, `app.js` |
| 3 | Express.js — Middleware & Routing | `q3-middleware-routing/server.js` |
| 4 | Express.js — Building a REST API | `q4-rest-api/server.js` |
| 5 | Express.js — Debugging & Error Handling | `q5-error-handling/server.js` |
| 6 | APIs — Consuming a REST API in React | `q6-react-booklist/BookList.jsx` |
| 7 | APIs — CORS | `q7-cors/server.js` |

## Run Locally

```bash
npm install
```

Then run any question:

```bash
npm run q1   # event loop
npm run q2   # modules
npm run q3   # middleware (port 5000)
npm run q4   # REST API (port 5000)
npm run q5   # error handling (port 5000)
npm run q7   # CORS (port 5000)
```

> Q3, Q4, Q5 and Q7 all use **port 5000**, so run only one server at a time.

### Q6 (React)
`BookList.jsx` is a React component. Copy it into the `src/components/` folder of a Vite React app
(for example your Frontend Practical Test project), import it in `App.jsx`, and run the Q7 server
(`npm run q7`) so that the API works with CORS.

### Quick tests (Q3 / Q4)

```bash
# Public GET
curl http://localhost:5000/api/books

# POST without key -> 401
curl -X POST http://localhost:5000/api/books -H "Content-Type: application/json" -d '{"title":"X","author":"Y"}'

# POST with key -> 201
curl -X POST http://localhost:5000/api/books -H "Content-Type: application/json" -H "x-api-key: secret123" -d '{"title":"X","author":"Y"}'

# DELETE (Q4)
curl -X DELETE http://localhost:5000/api/books/1
```

## Tech Stack
Node.js · Express.js · React · CORS

## Author
**Atul Krishna** — CSE, COER University, Roorkee
