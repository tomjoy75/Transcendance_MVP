# 🎩 Transcendence_MVP

**Minimal Viable Product for the ft_transcendence project (42 school)**  
This repository contains a lightweight and modular starting point focused exclusively on **user authentication** and frontend/backend integration.

---

## 🌟 MVP Goals

This MVP is built to lay down a strong technical foundation before implementing the Pong game or additional modules.  
It currently includes:

- Single Page Application (SPA) built with **Vanilla TypeScript**
- Backend built with **Fastify (Node.js)** and **SQLite**
- **JWT-based authentication**
- Avatar upload system
- Fully **Dockerized environment** with `docker-compose`
- Two volumes: one for user data (DB), one for avatar images

---

## 🛡️ Tech Stack

| Layer    | Technologies |
|----------|--------------|
| Frontend | Vanilla TypeScript, HTML, CSS (Tailwind optional), SPA |
| Backend  | Fastify, SQLite, bcrypt, fastify-jwt, dotenv |
| Runtime  | Docker, Docker Compose |
| Storage  | SQLite DB volume, Avatar file volume |

---

## 📁 Project Structure

```
Transcendence_MVP/
├── frontend/           # SPA with TypeScript
│   ├── index.html
│   ├── main.ts
│   ├── style.css
│   └── Dockerfile
├── backend/            # Fastify API + SQLite
│   ├── server.ts
│   ├── db.sqlite
│   ├── .env
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/tomjoy75/Transcendence_MVP.git
cd Transcendence_MVP
cp backend/.env.example backend/.env  # Customize secrets
docker-compose up --build
```

Access points:
- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:3001](http://localhost:3001)

---

## ✅ MVP Features

- [x] User registration and login
- [x] Passwords securely hashed with bcrypt
- [x] JWT-based authentication and protected routes
- [x] Authenticated `/me` route to retrieve user info
- [x] Avatar upload
- [x] SPA behavior with dynamic page switching

---

## 🧹 Upcoming Modules

- Friends list & online status
- Game history & statistics
- Real-time Pong gameplay
- WebSocket integration
- OAuth (remote authentication)

---

## 📜 License

This is a pedagogical project developed as part of the 42 curriculum.  
Not intended for commercial use or redistribution.

---

## ✍️ Author

MVP project developed by **tjoyeux**, student at [42 School].


