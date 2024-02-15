<template>
  <h1>UPchieve Chat</h1>
  <nav class="navigation">
    <router-link to="/sign-in" class="nav-link">Sign In</router-link>
    <router-link to="/register" class="nav-link">Register</router-link>
    <button @click="handleSignOut" v-if="isLoggedIn">Sign Out</button>
  </nav>
  <div class="app-container">
    <form @submit.prevent="signIn" class="form-container">
      <div class="card">
        <div class="card-header">
          <h3>Sign In</h3>
        </div>
        <div class="card-body">
          <!-- Updated type from "text" to "email" -->
          <label for="signInEmail">Email</label>
          <input
            type="email"
            id="signInEmail"
            v-model="email"
            required
            placeholder="Enter your email"
          />
          <!-- Correctly bind to the email ref -->

          <label for="signInPassword">Password</label>
          <input
            type="password"
            id="signInPassword"
            v-model="password"
            required
            placeholder="Enter your password"
          />
        </div>
        <div class="card-footer">
          <button type="submit">Sign In</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

// Refs for form inputs
const email = ref("");
const password = ref("");
const router = useRouter();
const db = getFirestore();
const isLoggedIn = ref(false);

// Updated method name to signIn
const signIn = async () => {
  try {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email.value, password.value);
    console.log("Successfully signed in");
    router.push("/");
  } catch (error) {
    console.error("Sign-in error:", error);
    alert(error.message); // Display an error message
  }
};
</script>

<style scoped>
h1,
nav a {
  text-align: center;
  color: #15cda1;
  text-decoration: none;
}
nav {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
}
.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #15cda1;
}

.form-container {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

input[type="text"],
input[type="email"],
input[type="password"] {
  font-size: 16px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #333;
}

input[type="text"]::placeholder,
input[type="email"]::placeholder,
input[type="password"]::placeholder {
  color: #999;
}

.card {
  margin: 0;
}

.card-header h3 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.card-body {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
  font-size: 16px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #333;
}

input[type="text"]::placeholder,
input[type="password"]::placeholder {
  color: #999;
}

.card-footer {
  text-align: center;
}

button {
  font-size: 16px;
  color: #fff;
  background-color: #107c41;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0a6844;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
