# 🛍️ Shopping App

A sleek, responsive e-commerce web application built with React. This app allows users to browse products, filter by categories, search, and visualize product distribution using charts.

---

## 🚀 Features

- 📦 **Dynamic Product Listing** – Fetched from [Fake Store API](https://fakestoreapi.com/)
- 🔍 **Search Functionality** – Filter products in real-time
- 🗂️ **Category Navigation** – Select products by category
- 📊 **Analytics** – Visualize product distribution by category with a pie chart
- 📱 **Responsive Design** – Works seamlessly on desktop and mobile
- ⚛️ **Modern Tech Stack** – Built using Create React App and Chart.js

---

## 📁 Project Structure

```
Shopping-App/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.js          # Search bar and category menu
│   │   ├── ProductList.js     # Product rendering logic
│   │   ├── AnalyseButton.js   # Button to trigger pie chart modal
│   │   └── PieChartModal.js   # Chart.js-based pie chart
│   ├── pages/
│   │   └── Home.js            # Main page component
│   ├── utils/
│   │   └── api.js             # API functions (not included here)
│   ├── App.js                 # Root app with routes and layout
│   └── index.js               # Entry point
├── package.json
└── README.md
```


yaml
Copy
Edit

---

## 🧰 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/bgauri05/Shopping-App.git
cd Shopping-App
2. Install Dependencies
bash
Copy
Edit
npm install
3. Run the App
bash
Copy
Edit
npm start
Open http://localhost:3000 to view it in your browser.

🛠️ Available Scripts
bash
Copy
Edit
npm start       # Start development server
npm test        # Run tests in watch mode
npm run build   # Create optimized production build
npm run eject   # ⚠️ Expose all config files (irreversible)
📊 Product Analytics
Click the "Analyse" button in the bottom-right corner to view a pie chart breakdown of products by category using Chart.js.

👤 Author
Gauri Bhonsle
GitHub: @bgauri05

📝 License
This project is licensed under the MIT License.
