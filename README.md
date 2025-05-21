🛍️ Shopping App
A sleek, responsive e-commerce web application built with React. This app allows users to browse products, filter by categories, search, and visualize product distribution using charts.

🚀 Features
🧾 Dynamic Product Listing – Fetched from Fake Store API

🔍 Search Functionality – Filter products in real-time

🗂️ Category Navigation – Select products by category

📊 Analytics – Visualize product distribution by category with a pie chart

📱 Responsive Design – Works seamlessly on desktop and mobile

⚛️ Modern Tech Stack – Built using Create React App and Chart.js

📁 Project Structure
php
Copy
Edit
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
📦 Getting Started
1. Clone the Repository
bash
Copy
Edit
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
Visit http://localhost:3000 in your browser.

🛠️ Available Scripts
npm start — Start development server

npm test — Run tests in watch mode

npm run build — Create optimized production build

npm run eject — ⚠️ Expose all config files (irreversible)

📊 Product Analytics
Click the "Analyse" button in the bottom-right corner to view a pie chart breakdown of products by category using Chart.js.

👤 Author
Gauri Bhonsle
GitHub: @bgauri05

📝 License
This project is licensed under the MIT License.
