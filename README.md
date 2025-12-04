WasteNot – Smart Kitchen Assistant (Expo + Firebase + AI OCR)

WasteNot is a smart kitchen management app designed to reduce food waste by helping users track ingredient expiry dates, plan groceries efficiently, and generate AI-powered recipe suggestions based on available ingredients.

Built using React Native (Expo SDK 54), Firebase, OCR (Tesseract.js), and the Spoonacular Recipe API, WasteNot combines practicality with AI-driven convenience.

🚀 Features
🧾 Ingredient Management

Add ingredients manually or via image scanning (OCR-based).

Automatically extract ingredient names from handwritten/printed labels.

Track expiry dates and receive timely push notifications.

📅 Expiry Alerts

Smart reminders before food goes bad.

Color-coded alert system for near-expiring items.

🤖 AI Recipe Suggestions

Generates recipes using leftover ingredients.

Uses the Spoonacular API + user pantry data.

Shows cooking time, instructions, and ingredients list.

🛒 Smart Grocery Planner

Automatically detects missing ingredients.

Builds optimized grocery lists with minimal waste.

Helps maintain a healthy pantry cycle.

🔐 Authentication

Firebase Authentication (Email/Password)

Secure user-specific data in Firestore.

🛠️ Tech Stack
Frontend

React Native

Expo SDK 54

React Navigation

Backend

Firebase Firestore (Database)

Firebase Authentication

AI / OCR

Tesseract.js OCR

APIs

Spoonacular Recipe API

Other Tools

Expo Image Picker

Expo Image Manipulator

Expo Notifications

📂 Folder Structure
WasteNot/
 ├── app/
 ├── assets/
 ├── components/
 ├── screens/
 ├── utils/
 ├── config/
 ├── App.js
 └── package.json

📸 Key Screens

Login & Signup

Add Ingredient (with OCR)

Ingredient List

Expiry Alerts

Recipe Suggestions

Grocery Planner

⚙️ Setup & Installation

Clone the repo:

git clone https://github.com/taniabhat/WasteNot.git
cd WasteNot


Install dependencies:

npx expo install
npm install


Start the app:

npx expo start

🧪 Testing the App

Use Expo Go (SDK 54 compatible) to scan the QR code and run the app.

🚧 Future Enhancements

Multi-user families

Offline Mode

Advanced AI meal planning

Smart fridge integration (IoT)

Voice assistant support

📜 License

MIT License © 2025
