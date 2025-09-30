# Service Manager – Services & Blog Portal

This project is a **React-based web app** built as part of the frontend assignment.  
It demonstrates modern UI development, routing, state management, API (JSON) fetching, and WordPress (headless CMS) integration.

---

## 🚀 Features

### Homepage
- Hero banner with **brand name & tagline**
- Navigation: Home, Services, Blog, Contact
- Featured Services & Blogs preview
- Fully responsive design

### Services Page
- Fetches data from a local `services.json`
- Displays services as **cards** with:
  - Image  
  - Title  
  - Description  
  - Price
- Filters:
  - By category  
  - By maximum price

### Blog Page
- Fetches data from a local `blogs.json`
- Displays blog cards with:
  - Image  
  - Title  
  - Excerpt  
  - "Read More" link
- Blog Details page with full content
- Search by **title or excerpt**

### Contact Page
- Contact form with:
  - Name  
  - Email  
  - Message  
  - reCAPTCHA validation
- Mock submission (stores data in state only)

### General Requirements
- Built with **React + Vite**
- **React Router** for navigation
- **Tailwind CSS** for styling
- Fully **responsive** (mobile, tablet, desktop)
- Secure headers included in `index.html`
  - `Content-Security-Policy`
  - `X-Frame-Options`
  - `X-Content-Type-Options`
- Modular, clean, and readable code

---

## 🛠️ Tech Stack
- **React 19 + Vite**
- **Tailwind CSS** (utility-first styling)
- **React Router DOM**
- **Google reCAPTCHA** (mock integration)
- **WordPress REST API** (for Part 2 integration)

---

## 📂 Project Structure
src/
│── components/ # Reusable UI components (Navbar, BlogCard, ServiceCard, Spinner, etc.)
│── pages/ # Page-level components (Home, Services, Blog, BlogDetails, Contact)
│── data/ # Local JSON files (services.json, blogs.json)
│── assets/ # Public/images
│── App.jsx # Routes configuration
│── main.jsx # React entry file




---

## ⚡ Getting Started

### 1. Clone the repo
.git clone https://github.com/your-username/service-manager.git
.cd service-manager

### 2. Install dependencies
- npm install
- npm run dev


