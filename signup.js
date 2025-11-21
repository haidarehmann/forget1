import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
//   https://firebase.google.com/docs/web/setup#available-libraries 
//  Your web app's Firebase configuration 
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
// DOM Elements 
const Username = document.getElementById('username');
const Email = document.getElementById('g-mail');
// Eye toggle for Password field
const eye = document.getElementById("eye");
const hide = document.getElementById("hide");
const Password = document.getElementById("password");
eye.onclick = function () {
  Password.type = "text";
  eye.style.display = "none";
  hide.style.display = "block";
};
hide.onclick = function () {
  Password.type = "password";
  eye.style.display = "block";
  hide.style.display = "none";
};
// Eye toggle for Confirm Password field 
const eyeConfirm = document.getElementById("eye-confirm");
const hideConfirm = document.getElementById("hide-confirm");
const ConfirmPassword = document.getElementById("confirm-password");
eyeConfirm.onclick = function () {
  ConfirmPassword.type = "text";
  eyeConfirm.style.display = "none";
  hideConfirm.style.display = "block";
};
hideConfirm.onclick = function () {
  ConfirmPassword.type = "password";
  eyeConfirm.style.display = "block";
  hideConfirm.style.display = "none";
};
const signupBox = document.getElementById('signup');
let para = document.getElementById("para1")
signupBox.addEventListener('click', async function (e) {
  if (e.target.classList.contains('signBtn')) {
    let emailVal = Email.value.trim();
    let passVal = Password.value.trim();
    let confirmVal = ConfirmPassword.value.trim();
    if (!emailVal || !passVal || !confirmVal) {
      alert("All fields are required!");
      return;
    }
    if (passVal !== confirmVal) {
      para.style.display = "block"
      return
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, emailVal, passVal);
      console.log("Signup successful:", userCredential.user);
      alert("Account created successfully!");
      window.location.href = "index.html"; // Redirect to login
    }
    catch (error) {
      console.error("Signup error:", error.message)
    }
  }
});