1. Car Showcase – Frontend Assignment (React + Tailwind + Vercel)

This project is built as part of the Front-End Internship Assignment.
It showcases a car detail page inspired by Spinny’s UI style and includes:
Image carousel with smooth navigation
360° interactive car view
Price calculator (Number of Invites × Duration of Event)
Car overview section (Model, Year, Mileage, Price)
Multi-car switching (Bolero, Scorpio, Safari)

2. Tech Stack

React.js (Vite)
Tailwind CSS
JavaScript (ES6)
Vercel (Deployment)

3. Features Implemented
🖼️ 1. Picture Scroll (Image Carousel)

Each car has 2 rotating hero images.
Carousel auto-scrolls every 3 seconds.
Smooth transitions + navigation dots.
Images used (example):
Bolero: bolero0, bolero5
Scorpio: scorpio4, scorpio5
Safari: safari4, safari5

🔄 2. 360° Interactive View
Clicking the 360° View button opens a modal.
Users can view multiple angle shots for a realistic rotation effect.
Uses the remaining images for each car (bolero1–4, scorpio0–3, safari0–3).

🧮 3. Price Calculator

A simple calculator based on:
Number of Invites
Duration of Event (hours)
It dynamically computes total cost and displays it clearly.

🚘 4. Car Overview
Shows key details:
Model
Year
Mileage
Price
The section updates automatically when switching between Bolero, Scorpio, and Safari.

4. Project Folder
alpha/
  ├── public/
  │     bolero0.png
  │     bolero1.png
  │     ...
  ├── src/
  │   ├── components/
  │   │     ImageCarousel.jsx
  │   │     ThreeSixtyView.jsx
  │   │     PriceCalculator.jsx
  │   │     CarOverview.jsx
  │   │     Navbar.jsx
  │   ├── App.jsx
  │   ├── main.jsx
  │   └── index.css
  └── README.md

Live Demo:https://alpha-cars-gold.vercel.app/

5. Installation & Setup
1.Clone the repo
git clone https://github.com/RitikaDutta0901/alpha-cars.git
cd your-repo-name

2.Install dependencies
npm install

3.Run locally
npm run dev

4.Build for production
npm run build

Author
Ritika
Frontend Developer & Web Enthusiast