# 🍦 Ice Cream Cone Selector App

A responsive and animated React.js web app that allows users to explore various ice cream flavors through interactive cone thumbnails. When a cone is selected, it animates into view with corresponding background and description.

---

## 📌 Project Overview

This project showcases:

* A dynamic hero section with animated cone switching
* Responsive layout using Flexbox and media queries
* Smooth entry and exit animations for cone transitions
* A visually engaging UI styled with CSS
* Component-based structure using React

---

## 📁 Folder Structure

```
/src
│
├── components
│   └── Navbar.jsx         # Top navigation bar
│   └── Hero.jsx           # Main animated section for cone selection
│
├── data
│   └── Cone.js            # Array of available ice cream cone objects
│
├── styles
│   └── Hero.css           # Styling for hero and animation
│   └── Navbar.css         # Styling for navbar
│
├── App.jsx                # Root component that manages selectedCone state
└── main.jsx               # Entry point for React app
```

---

## 🚀 Setup & Deployment

### 🔧 Local Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Tashu22-hub/icecream
   cd icecream-cone-selector
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Visit in browser:**

   ```
   http://localhost:5173
   ```

> ⚠️ Make sure you're using **Node.js ≥ 16** and **npm ≥ 8**

---

### 🚢 Deployment

You can deploy this app using:

* **Vercel:** Drag and drop or use `vercel` CLI
* **Netlify:** Connect repo or use `netlify deploy`
* **GitHub Pages:** Use `gh-pages` package for deployment
* **Manual Hosting:** Build static files using:

```bash
npm run build
```

Then serve the `/dist` folder.

---

## 🐛 Known Issues or Limitations

* Animations may not perform smoothly on very low-end mobile devices.
* Cone thumbnails are static images; there’s no dynamic fetch or backend.
* No accessibility (a11y) features like ARIA roles yet.
* No mobile gestures like swiping (yet).

---

## 🧠 Internal Documentation & Comments

### Components

#### `Hero.jsx`

* Uses `useState` and `useEffect` to animate cone transitions
* `selectedCone` state is passed from `App.jsx`
* Each thumbnail has active/inactive state based on selection

#### `Cone.js`

```js
export const cones = [
  {
    id: 1,
    name: 'Strawberry',
    description: 'sweet and creamy strawberry',
    image: '/cones/strawberry.png',
    bgColor: "linear-gradient(to right,rgb(201, 13, 160),rgb(249, 130, 239))",
  },
  ...
];
```

#### `Hero.css`

* Animations: `@keyframes springIn` and `springOut`
* Responsive design using `@media (max-width: ...)`
* `.cone-buttons` wraps thumbnails and uses `flex-wrap`

---

## ✨ Features to Add (Future Roadmap)

* Dark mode toggle
* Add-to-cart functionality
* Backend for managing flavors and pricing
* Mobile gesture support
* Accessibility improvements (keyboard navigation, screen reader support)

---

## 📜 Acknowledgements

* Fonts: [Google Fonts – Poppins, Pacifico](https://fonts.google.com/)
* Icons & assets are either custom or sourced for educational/demo use.

---

## 📃 License

This project is open-source and free to use under the [MIT License](LICENSE).

---
