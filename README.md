# 🎶 DJ Sets Frontend

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

A modern React app that streams DJ sets directly from Dropbox via a FastAPI backend.  
Users can **play**, **download**, and **view tracklists** for each set, all inside a clean UI.

---

## 🚀 Features

-   🎧 Stream MP3 files with an `<audio>` player
-   📥 Direct download support
-   📃 Tracklist viewer
-   🖼️ Cover artwork as background images
-   ⚡ Built with Vite + TypeScript for speed
-   🌐 Deployed to Fly.io (frontend + backend)

---

## 📂 Project Structure

```plaintext
frontend/
├── src/
│ ├── components/
│ ├── assets/
│ └── App.tsx
├── public/
├── package.json
└── vite.config.ts
```

---

## 🛠️ Setup & Development

### 1. Clone repo

```bash
git clone https://github.com/your-username/dj-sets-frontend.git
cd dj-sets-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure backend URL

```bash
const BASE_URL = "http://127.0.0.1:8080"; // or your deployed backend
```

### 4. Run locally

```bash
npm run dev
```

### 5. Build & Deploy

```bash
npm run build
```

🔮 Demo
🌍 Live demo: sets.antoniocoutinho.pt

📜 License
MIT — Feel free to fork and explore.
