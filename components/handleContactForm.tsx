// Import the functions you need from the SDKs you need
import { initializeApp } from "../node_modules/firebase/app";
import { getDatabase, ref, set } from "../node_modules/firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4ELwh9mGOksj-LbYNCqeSM2TJAUnACKI",
    authDomain: "kisstech-b6977.firebaseapp.com",
    projectId: "kisstech-b6977",
    storageBucket: "kisstech-b6977.appspot.com",
    messagingSenderId: "938639539460",
    appId: "1:938639539460:web:f8ff6dd88b07ba7bd6e451"
  };

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);
const db = getDatabase(fireBaseApp);

// handleForm.js
export const handleFormSubmit = (event : any) => {
  console.log("Form submitted");
  // Add your form handling logic here
  event.preventDefault();

  const name = (document.getElementById("name") as HTMLInputElement)?.value;
  const email = (document.getElementById("email") as HTMLInputElement)?.value;
  const message = (document.getElementById("message") as HTMLInputElement)?.value;

  const data = {
    name,
    email,
    message,
  };
  console.log(data);

  // Create a reference to the location in the database where you want to store the data
  const userRef = ref(db, "Contact Form/" + name);

  // Write data to this reference
  set(userRef, data)
    .then(() => {
    //   alert("Form submitted successfully!");
      console.log("Form submitted successfully");
    })
    .catch((error : any) => {
      console.error("Error submitting form: ", error);
      alert("Error submitting form: " + error.message);
    });

    event.target.reset();
};
