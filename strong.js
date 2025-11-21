import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBJ3CNK3ya5xUftrVh_1_Jaxz9PhnVs6U8",
  authDomain: "abcd-8058f.firebaseapp.com",
  databaseURL: "https://abcd-8058f-default-rtdb.firebaseio.com",
  projectId: "abcd-8058f",
  storageBucket: "abcd-8058f.firebasestorage.app",
  messagingSenderId: "778990594892",
  appId: "1:778990594892:web:d0cd767d5e0bcf328d7de9"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const Password = document.getElementById('password');
const ConfirmPassword = document.getElementById('confirm-password');
const Proceed = document.getElementById('procedure');
const para = document.querySelector(".para");

// Get email from URL (sent from OTP verification page)
const urlParams = new URLSearchParams(window.location.search);
const safeEmail = urlParams.get("email"); // example: "haidarehman93@gmail,com"

Proceed.addEventListener('click', async (e) => {
    e.preventDefault();

    const passVal = Password.value.trim();
    const confirmVal = ConfirmPassword.value.trim();

    if (!passVal || !confirmVal) {
        return alert("All fields are required!");
    }

    if (passVal !== confirmVal) {
        para.style.display = "block";
        return;
    }

    para.style.display = "none";

    try {
        // Store password in Firebase under the user's email (unsafe)
        await set(ref(db, `passwords/${safeEmail}`), {
            password: passVal
        });

        alert("Password updated successfully!");
        window.location.href = "index.html"; // redirect to login page

    } catch (error) {
        console.error(error);
        alert("Error: " + error.message);
    }
});
