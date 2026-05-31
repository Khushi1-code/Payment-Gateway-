# 💳 Payment Gateway Demo

A simple payment gateway integration built with **Node.js**, **Express**, and **Razorpay** — created as a demo project to understand how online payments work.

---

## 🚀 Features

- Razorpay payment integration (Test Mode)
- Order creation via Razorpay API
- Interactive checkout modal
- Clean frontend UI

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Payment:** Razorpay API
- **Environment:** dotenv

---

## ⚙️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Khushi1-code/Payment-Gateway-
   cd Payment-Gateway-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create an `.env` file** in the root folder
   ```env
   KEY_ID=your_razorpay_key_id
   KEY_SECRET=your_razorpay_key_secret
   ```

4. **Run the server**
   ```bash
   node server.js
   ```

5. Open `http://localhost:5000` in your browser

---

## 💡 Test Payment Credentials

Since this runs in **Razorpay Test Mode**, use these to simulate a payment:

| Method | Details |
|--------|---------|
| Card | `5267 3181 8797 5449` • CVV: `123` • OTP: `1234` |

---

## 📁 Project Structure

```
Payment-Gateway/
├── index.html        # Frontend UI
├── script.js         # Razorpay checkout logic
├── style.css         # Styling
├── server.js         # Express server & Razorpay API
├── package.json      # Dependencies
└── .gitignore        # Ignored files
``
⚠️ Never push your .env file to GitHub.
