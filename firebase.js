import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

const firebaseConfig = {
  authDomain: "mohannad-medical-system.firebaseapp.com",
  projectId: "mohannad-medical-system",
  storageBucket: "mohannad-medical-system.firebasestorage.app",
  messagingSenderId: "1068802738014",
  appId: "1:1068802738014:web:7553752446856658a0f1cf"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
