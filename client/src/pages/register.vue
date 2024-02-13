<template>
  <div class="app-container">
    <form @submit.prevent="register" class="form-container">
      <div class="card">
        <div class="card-header">
          <h3>Register</h3>
        </div>
        <div class="card-body">
          <label for="registerEmail">Email</label>
          <input
            type="email"
            id="registerEmail"
            v-model="email"
            required
            placeholder="Enter your email"
          />

          <label for="registerUsername">Username</label>
          <input
            type="text"
            id="registerUsername"
            v-model="username"
            required
            placeholder="Choose a username"
          />

          <label for="registerPassword">Password</label>
          <input
            type="password"
            id="registerPassword"
            v-model="password"
            required
            placeholder="Choose a password"
          />

          <label for="registerConfirmPassword">Confirm Password</label>
          <input
            type="password"
            id="registerConfirmPassword"
            v-model="confirmPassword"
            required
            placeholder="Confirm your password"
          />
        </div>
        <div class="card-footer">
          <button type="submit">Register</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const router = useRouter();
const register = () => {
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match.");
    return;
  }

  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Successfully registered!", data);
      // Redirect to the sign-in page after successful registration
      router.push("/sign-in");
    })
    .catch((error) => {
      console.error("Registration error:", error);
      alert(error.message);
    });
};
</script>

<style scoped>
.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #15cda1; /* Background color for consistency */
}

.form-container {
  width: 100%;
  max-width: 400px; /* Form width consistent with the sign-in page */
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-header h3 {
  text-align: center;
  color: #333; /* Text color for clarity */
  margin-bottom: 20px; /* Spacing between title and form inputs */
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

/* Updated to include input[type="email"] */
input[type="text"],
input[type="email"], /* Include email input */
input[type="password"] {
  font-size: 16px;
  padding: 10px;
  margin-bottom: 20px; /* Spacing between form fields */
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #333;
}

input[type="text"]::placeholder,
input[type="email"]::placeholder, /* Include email input placeholder */
input[type="password"]::placeholder {
  color: #999;
}

.card-footer {
  text-align: center;
}

button {
  font-size: 16px;
  color: #fff;
  background-color: #107c41; /* Button color for visual coherence */
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0a6844; /* Darker shade on hover */
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
