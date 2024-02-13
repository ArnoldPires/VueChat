/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App
 */

// Import the createApp function from Vue
import { createApp } from "vue";

// Import the App component
import App from "./App.vue";

// Import the router configuration
import router from "./router"; // Make sure the path matches your file structure

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk2dn46IQHMCmav0ioeu5Jv9dmydQ1QAg",
  authDomain: "vuechat-fea7d.firebaseapp.com",
  projectId: "vuechat-fea7d",
  storageBucket: "vuechat-fea7d.appspot.com",
  messagingSenderId: "110091579305",
  appId: "1:110091579305:web:c9a2666bd312f5f6239eb8",
  measurementId: "G-Z2PX8P20FW",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Import the function to register plugins (assuming it handles Vuetify among others)
import { registerPlugins } from "@/plugins";

// Create the Vue application instance
const app = createApp(App);

// Register plugins (Vuetify and potentially others)
registerPlugins(app);

// Use the router with the Vue application
app.use(router);

// Mount the Vue application to the DOM
app.mount("#app");
