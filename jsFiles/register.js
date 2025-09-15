  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCSUIPuHp0Urpyug-Ag0AQVrfNHQN_WVxI",
    authDomain: "playora-test.firebaseapp.com",
    projectId: "playora-test",
    storageBucket: "playora-test.firebasestorage.app",
    messagingSenderId: "240808267250",
    appId: "1:240808267250:web:d31aea86bac4826d112f6b",
    measurementId: "G-JS5675TB3K"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
