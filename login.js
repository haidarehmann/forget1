 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

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
const Email = document.querySelector('#email');
const Password = document.querySelector('#password');
let eye = document.getElementById("eye");
let hide = document.getElementById("hide")

eye.onclick = function () {
  if (Password.type === "password") {
    Password.type = "text";
    eye.style.display = "none"
     hide.style.display = "block"
  } else {
    Password.type = "password";
    
  }
};
hide.onclick = function () {
   if (Password.type === "text") {
    Password.type = "password";
    eye.style.display = "block"
     hide.style.display = "none"
  } else {
    Password.type = "text";
    
  }
};

const login = document.querySelector('#login');
let para = document.getElementById("para1")
login.addEventListener('click', async (e) => {
  e.preventDefault();
  let emailVal = Email.value.trim();
  let passVal = Password.value.trim();
  if (!emailVal || !passVal) {
    alert("Email and Password required!");
    return;
  }
   if (passVal) {
    para.style.display = "block"
    return
  }
  try {
    const userCredential = await signInWithEmailAndPassword(auth, emailVal, passVal);
    console.log("Login successful:", userCredential.user);
    alert("Login Successful ");
    window.location.href = "main.html"; // Redirect to your main page
  } catch (error) {
    console.error("Login error:", error.message);
    alert("Login Failed: " + error.message);
  }

});
