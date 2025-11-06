import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJ3CNK3ya5xUftrVh_1_Jaxz9PhnVs6U8",
    authDomain: "abcd-8058f.firebaseapp.com",
    projectId: "abcd-8058f",
    storageBucket: "abcd-8058f.firebasestorage.app",
    messagingSenderId: "778990594892",
    appId: "1:778990594892:web:d0cd767d5e0bcf328d7de9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// DOM
const resetBtn = document.querySelector('#resetBtn');
const Email = document.querySelector('#email');

resetBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  let emailVal = Email.value.trim();

  if (!emailVal) {
    alert("Email required!");
    return;
  }

  try {
    await sendPasswordResetEmail(auth, emailVal);
    alert(" Password reset link sent to your email!");
    window.location.href = "otp.html";
  } catch (error) {
    console.error("Error:", error.code, error.message);

    //  Added: Custom error handling for unregistered users
    if (error.code === 'auth/user-not-found') {
      alert(" This email is not registered. Please sign up first.");
    } 
    
    else if (error.code === 'auth/invalid-email') {
      alert(" Please enter a valid email address.");
    } 
    else {
      alert("Error: " + error.message);
    }
  }
});
