import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";

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

document.getElementById("verify").addEventListener("click", async () => {
  const enteredOTP = document.getElementById("otp_code").value.trim();
  const safeEmail = "haidarehman93@gmail,com"; // path where OTP is stored in Firebase

  if (!enteredOTP) {
    alert("Please enter OTP");
    return;
  }

  try {
    const snapshot = await get(ref(db, `otps/${safeEmail}`));

    if (!snapshot.exists()) {
      alert("No OTP found for this account!");
      return;
    }

    const firebaseOTP = snapshot.val().otp;

    if (enteredOTP === firebaseOTP) {
      alert("OTP verified successfully!");
      window.location.href = "confirm.html";
    } else {
      alert("Incorrect OTP. Please try again.");
    }

  } catch (error) {
    console.error(error);
    alert("Error: " + error.message);
  }
});
