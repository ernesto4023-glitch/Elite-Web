import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getDatabase
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {

  apiKey: "AIzaSyCIzD7LWp-t-evD9kJuJDtijoBFkrmVoHs",

  authDomain: "elite-web-68961.firebaseapp.com",

  databaseURL: "https://elite-web-68961-default-rtdb.firebaseio.com",

  projectId: "elite-web-68961",

  storageBucket: "elite-web-68961.firebasestorage.app",

  messagingSenderId: "655450100104",

  appId: "1:655450100104:web:b1f28144a3dbaf2d332a3d"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Realtime Database
export const db = getDatabase(app);