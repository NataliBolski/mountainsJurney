import { createApp } from "vue";
import App from "./App.vue";
import "firebase/auth";
import "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCuba89nI7n0k1ityqqEfmmXkScDp5h66Q",
  authDomain: "mountainsjurneyvue.firebaseapp.com",
  projectId: "mountainsjurneyvue",
  storageBucket: "mountainsjurneyvue.appspot.com",
  messagingSenderId: "900975084242",
  appId: "1:900975084242:web:d55271b5f0d70e1d4ae30b",
  measurementId: "G-RD6PN4JT0V",
};

initializeApp(firebaseConfig);
const app = createApp(App);

app.mount("#app");
