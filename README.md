# ReTrade V2

**ReTrade V2** is a React-based web application that allows users to upload and browse second-hand items for sale. This upgraded version replaces the vanilla JavaScript implementation with modern React architecture and introduces improved functionality using real-time tools and better state management.

> 🚧 *Note: The app is still not responsive and best viewed on desktop screens.*

---

## 🚀 Features

- **User-Posted Ads**  
  Users can submit listings with:
  - Item description  
  - Price  
  - Image  
  - Contact number  

- **Admin Review System**  
  - Ads go into a “Pending” queue after submission.  
  - Admin can log in to approve or reject ads.

- **Authentication & Accounts**  
  - Users can create accounts and manage their own ads.  
  - Admin login is separate for moderation tasks.

- **Real-Time Functionality**  
  - Supabase is used as the back-end-as-a-service for authentication and data storage.  
  - Ad data is persisted using Supabase and managed with React Query.

---

## ⚙️ Tech Stack

- **React 19** — Modern, component-based frontend
- **Supabase** — Back-end-as-a-service (auth + database)
- **React Query** — Data fetching and caching
- **React Hook Form** — Form management
- **Styled Components** — Scoped CSS-in-JS styling
- **React Router** — Client-side routing
- **React Icons** — Icon library
- **React Hot Toast** — Toast notifications
- **date-fns** — Utility library for date manipulation

---

## 👩‍💻 Admin Credentials

To test moderation functionality:
- **Email:** `admin@gmail.com`  
- **Password:** `12345678`

---

## 👥 User Credentials

To explore as a user:
- **Email:** `user@gmail.com`  
- **Password:** `12345678`

---

## 🛠 How to Run

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Start the app with `npm run dev` or `npm start`.
4. Log in with the credentials above or create a new user account.

---

## 🚧 Known Limitations

- **No Mobile Responsiveness (Yet)**  
  The UI is currently optimized only for desktop.

- **Basic Styling**  
  UI/UX improvements are in progress.

---

## 🤝 Contributions Welcome

ReTrade is a learning-focused project. Contributions, issues, and suggestions are encouraged — whether you're fixing bugs, improving design, or helping with mobile responsiveness!
