
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDJHB9l9Z_yHzj_vSiwhyQ9LvHq8zCGxx8",
    authDomain: "portfolio-b6c3a.firebaseapp.com",
    projectId: "portfolio-b6c3a",
    storageBucket: "portfolio-b6c3a.appspot.com",
    messagingSenderId: "832265218073",
    appId: "1:832265218073:web:9623177ca30e671e97a288",
    measurementId: "G-WJWXMFPFHP"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);



const login = document.getElementById("submit");

login.addEventListener("click", (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
console.log(username,email,password);
  })
