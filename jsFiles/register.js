// ✅ Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCSUIPuHp0Urpyug-Ag0AQVrfNHQN_WVxI",
  authDomain: "playora-test.firebaseapp.com",
  projectId: "playora-test",
  storageBucket: "playora-test.appspot.com",
  messagingSenderId: "240808267250",
  appId: "1:240808267250:web:d31aea86bac4826d112f6b",
  measurementId: "G-JS56S7TB3K"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const datab = getFirestore(app);

// ✅ Signup logic
document.getElementById("signupBtn").addEventListener("click", function (event) {
  event.preventDefault();


  const studusertype = document.getElementById("student").checked;
  const eduUsertype = document.getElementById("educator").checked;
  let userType = "";
  if (studusertype) {
    userType = "student";
  } else if (eduUsertype) {
    userType = "educator";
  }


  const fullName = document.getElementById("name").value;
  const schoolName = document.getElementById("school_name").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!fullName || !schoolName || !username || !email || !password || !userType) {
    alert("Please fill in all fields.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // ✅ Use displayName if available, fallback to email prefix
      const username1 = username || email.split("@")[0];

      // ✅ Save user details for dashboard
      localStorage.setItem("username", username1);
      localStorage.setItem("userType", userType);

      // Save in Firestore
      return setDoc(doc(datab, "users", user.uid), {
        uid: user.uid,
        Name: fullName,
        schoolName: schoolName,
        username: username,
        userType: userType,
        email: user.email
      }).then(() => {
        return userType; // pass along to next .then
      });
    })
    .then((userType) => {
      // Redirect
      if (userType === "student") {
        window.location.href = "../Student/studash.html";
      } else if (userType === "educator") {
        window.location.href = "../Educator/EduDash.html";
      }
    })
    .catch((error) => {
      alert(error.message);
      console.error(error);
    });
});