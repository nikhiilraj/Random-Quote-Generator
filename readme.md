# Quote Generator API

A tiny Fastify-based REST API that returns random motivational quotes.  
Each request gives a fresh quote. Lightweight, fast, portfolio-friendly.

---

## Features

- GET `/api/random` → returns a random quote
- Modular routing using Fastify plugins
- Clean ES module syntax (`import / export`)
- Basic project structure for backend practice
- Minimal code — easy to learn + extend

---

## Why I built this

- practice real backend routing with Fastify
- learn proper folder structure + plugins
- understand ES Modules in Node.js (`type: module`)
- get comfortable with running + testing small APIs

---

## Tech Stack

| Layer | Choice |
|---|---|
| Runtime | Node.js |
| Framework | Fastify |
| Language | JavaScript ES6 (import/export) |
| Package Manager | npm |

---

## How to run

```bash
git clone <your-repo-url>
cd quote-api

npm install
node src/app.js
````

Open in browser / Postman:

```
http://localhost:3000/api/random
```

---

## Folder Structure

```
quote-api/
├── src/
│   ├── app.js
│   └── routes/
│       └── quotes.js
└── package.json
```

* `src/app.js` → server instance + plugin registration
* `src/routes/quotes.js` → route definition + quote logic

---

## Key Learnings

* how Fastify server instance works
* plugin architecture (clean route separation)
* proper usage of status codes + JSON responses
* how Node.js loads ES modules
* how to structure micro APIs in small folders

---

## Future Improvements

* add POST `/api/add` to insert new quotes
* persist quotes in DB (Mongo / Postgres)
* category filtering (success / discipline / love / etc)
* authorization + rate-limit per user

---

## Author / Contact

* LinkedIn: <https://www.linkedin.com/in/nikhil0raj/>
* Email: <nikhil4rajj@gmail.com>

---

if you want — I can now also generate a `.gitignore` for this repo (Node.js standard) so your node_modules stays out of GitHub.

