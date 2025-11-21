import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBJ3CNK3ya5xUftrVh_1_Jaxz9PhnVs6U8",
  authDomain: "abcd-8058f.firebaseapp.com",
  databaseURL: "https://abcd-8058f-default-rtdb.firebaseio.com", // Important for Realtime DB
  projectId: "abcd-8058f",
  storageBucket: "abcd-8058f.firebasestorage.app",
  messagingSenderId: "778990594892",
  appId: "1:778990594892:web:d0cd767d5e0bcf328d7de9"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.getElementById("resetBtn").addEventListener("click", async () => {
  let email = document.getElementById("email").value.trim();

  if (!email) {
    alert("Enter your email");
    return;
  }

  try {
    const hardcodedOTP = "123456";

    // Replace all invalid characters (e.g., '.' in email) with commas
    const safeEmail = email.replace(/\./g, ',');

    // Store OTP in Realtime Database
    await set(ref(db, `otps/${safeEmail}`), {
      otp: hardcodedOTP,
      createdAt: Date.now()
    });

    // alert(`Your OTP is: ${hardcodedOTP}`);
    window.location.href = "otp.html"; // Redirect to OTP verification page
  } 
  catch (error) {
    console.error(error);
    alert("Error: " + error.message);
  }
});
