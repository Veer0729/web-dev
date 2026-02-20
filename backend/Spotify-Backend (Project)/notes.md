# Backend Architecture Notes

## 📂 Project Structure Overview
This is a **Node.js** backend using **Express** for the server and **MongoDB** (via Mongoose) for the database. It follows a **MVC (Model-View-Controller)** pattern (minus the View, as it's an API).

```text
server.js             # Entry point (Starts server)
src/
├── app.js            # App configuration (Middleware & Routes)
├── db/               # Database connection
├── models/           # Mongoose Schemas (Data structure)
├── controllers/      # Business Logic (Functions)
├── routes/           # API Endpoints (URL mapping)
├── middlewares/      # Request processing (Auth checks)
└── services/         # External services (ImageKit)
```

---

## 🚀 Entry Points

### [server.js]
- **Role**: The "Main" file.
- **Function**:
  - Loads environment variables (`dotenv`).
  - Connects to the database ([ConnectDB()]
  - Starts the server listening on port 3000.

### [src/app.js]
- **Role**: The "Application" setup.
- **Function**:
  - Configures Express.
  - Sets up global middleware: `express.json()` (for parsing JSON bodies) and `cookieParser` (for reading cookies).
  - Mounts routes:
    - `/api/auth` -> [auth.routes.js]
    - `/api/music` -> [music.routes.js]

---

## 🗄️ Database & Models (`src/models/`, `src/db/`)

### `src/db/db.js`
- **Role**: Database Connector.
- **Function**: Connects to the MongoDB URI specified in `.env`.

### Models (Data Schemas)
1. **`user.models.js`**
   - Stores user info (`username`, `email`, `password` hash).
   - `role`: Can be `"user"` or `"artist"`.
2. **`music.model.js`**
   - Stores song info.
   - fields: `title`, `uri` (file URL), `artist` (reference to User).
3. **`album.model.js`**
   - Stores album info.
   - fields: `title`, `musics` (array of Music IDs), `artist` (reference to User).

---

## 🧠 Controllers (Logic) (`src/controllers/`)

### `auth.controller.js`
- **`registerUser`**:
  - Checks if user exists.
  - Hashes password using `bcryptjs`.
  - Creates user in DB.
  - Generates a **JWT** (JSON Web Token) and sets it as a cookie (`token`).
- **`loginUser`**:
  - Validates credentials.
  - Generates JWT and sets cookie.
- **`logoutUser`**:
  - Clears the cookie.

### `music.controller.js`
- **`createMusic`**:
  - Receives a file upload.
  - Uploads file to **ImageKit** (via `storage.service`).
  - Saves music metadata to DB with the returned URL.
- **`createAlbum`**:
  - Creates an album record linking to multiple music IDs.
- **`getAllMusic`** / **`getAllAlbums`**:
  - Fetches data from DB. `getAllAlbums` uses `.populate()` to also fetch Artist details.
- **Note**: Some critical authorization logic (checking if user is "artist") is mixed inside `createAlbum` (which should ideally be in middleware).

---

## 🌐 Routes (API Endpoints) (`src/routes/`)

### `auth.routes.js`
- `POST /register`: Register a new user.
- `POST /loginUser`: Login.
- `POST /logoutUser`: Logout.

### `music.routes.js`
- `POST /upload`: Upload a song.
  - **Middleware**: `authArtist` (Must be logged in as Artist) + `multer` (File handling).
- `POST /album`: Create an album.
  - **Middleware**: `authArtist`.
- `GET /`: Get all music.
  - **Middleware**: `authUser` (Must be logged in).
- `GET /albums`: Get all albums.
  - **Middleware**: `authUser`.

---

## 🛡️ Middleware (`src/middlewares/`)

### `auth.middlewares.js`
- **`authArtist`**:
  - Checks if `token` cookie exists.
  - Verifies JWT.
  - Checks if `decoded.role === "artist"`.
  - If valid, attaches user info to `req.user` and allows request to proceed.
- **`authUser`**:
  - Similar to above, but allows any valid user (role `user` or `artist`).

---

## ☁️ Services (`src/services/`)

### `storage.service.js`
- **Role**: File Storage Helper.
- **Function**: Uses **ImageKit** SDK to upload files to the cloud. Returns the file URL.

---

## 🔑 Config (`.env`)
- Stores sensitive keys:
  - `MONGO_URI`: Database address.
  - `JWT_SECRET`: Key for signing tokens.
  - `IMAGEKIT_PRIVATE_KEY`: API key for file storage.
