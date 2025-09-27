# ExpressJS Starter Template 🚀

A minimal and production-ready starter template for building RESTful APIs with **Express.js**.
This template includes TypeScript, environment variable management, request logging, and common development tools.

---

## ✨ Features

* ⚡ **Express.js** – Fast, unopinionated web framework
* 🛡️ **TypeScript** – Type safety and modern JavaScript features
* 🔑 **dotenv** – Manage environment variables
* 🔒 **bcrypt** – Secure password hashing
* 🗂️ **Prisma ORM** – Database access (with SQLite by default)
* 📝 **Morgan** – HTTP request logging (development mode)
* 🔄 **Nodemon** – Hot reload for development

---

## 📂 Project Structure

```
expressJs_starter_template/
│── prisma/              # Prisma schema & migrations
│── src/
│   ├── controllers/     # Route controllers
│   ├── middlewares/     # Express middlewares
│   ├── routes/          # API routes
│   ├── utils/           # Helper functions
│   ├── server.ts        # App entry point
│── .env                 # Environment variables
│── .env.example         # Example env file
│── .gitignore           # Ignored files
│── package.json
│── tsconfig.json
│── README.md
```

---

## ⚙️ Installation & Setup

1. Clone this repo:

   ```bash
   git clone https://github.com/emXonER/expressJs_starter_template.git
   cd expressJs_starter_template
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Setup environment variables:

   ```bash
   cp .env.example .env
   ```

4. Initialize Prisma (for SQLite by default):

   ```bash
   npx prisma migrate dev --name init
   ```

5. Run in development mode:

   ```bash
   npm run dev
   ```

---

## 🛠️ Scripts

* `npm run dev` – Start server in development (with Nodemon)
* `npm run build` – Compile TypeScript to JavaScript
* `npm run start` – Run compiled server

---

## 📖 API Example

Example route:

```http
GET /api/health
```

Response:

```json
{
  "status": "ok",
  "message": "Server is running 🚀"
}
```

---

## 📌 Environment Variables

Create a `.env` file based on `.env.example`. Example:

```
NODE_ENV= "development"
PORT=4000
DATABASE_URL= "file:./dev.db"
```

---

## 📜 License

This project is licensed under the MIT License.
Feel free to use it for personal or commercial projects.

---

Made with ❤️ using **Express.js + TypeScript**
