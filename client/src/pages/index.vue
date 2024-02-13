<template>
  <nav class="navigation">
    <router-link to="/sign-in" class="nav-link">Sign In</router-link>
    <router-link to="/register" class="nav-link">Register</router-link>
    <button @click="handleSignOut" v-if="isLoggedIn">Sign Out</button>
  </nav>
  <div class="app-container">
    <form @submit.prevent="onSubmit" class="form-container">
      <div class="card">
        <div class="card-header">
          <i class="mdi mdi-chat"></i>
          <h3>UPchieve Chat</h3>
        </div>
        <div class="card-body">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            v-model="state.username"
            required
            placeholder="Enter your username"
          />

          <div class="select-wrapper">
            <label for="room">Join a Room</label>
            <select id="room" v-model="state.room">
              <option v-for="room in rooms" :key="room" :value="room">
                {{ room }}
              </option>
            </select>
          </div>
        </div>
        <div class="card-footer">
          <button type="submit" :disabled="!state.username || !state.room">
            Join The Chat
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const router = useRouter();
const isLoggedIn = ref(false);

// Assuming Firebase is initialized elsewhere, like in main.js
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  isLoggedIn.value = !!user;
});

const handleSignOut = async () => {
  try {
    await signOut(auth);
    router.push("/sign-in"); // Or wherever you want to redirect after sign-out
  } catch (error) {
    console.error("Error signing out: ", error);
  }
};

const rooms = [
  "Math",
  "English",
  "Science",
  "Social Studies",
  "College Counseling",
  "SAT & ACT Prep",
];
const state = reactive({
  username: "",
  room: rooms[0],
});
const onSubmit = () => {
  console.log("[SUBMIT]");
  router.push(`/chat?username=${state.username}&room=${state.room}`);
};
</script>

<style scoped>
.navigation {
  text-align: center;
  margin-bottom: 20px;
}

.nav-link {
  margin: 0 10px;
  color: #fff;
  text-decoration: none;
  padding: 10px;
  background-color: #107c41;
  border-radius: 5px;
}
.nav-link:hover {
  background-color: #0a6844;
}
.app-container {
  background-color: #15cda1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
h3,
i {
  color: #15cda1;
}

.form-container {
  max-width: 600px;
  width: 100%;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: #fff;
}

.select-wrapper {
  position: relative;
  width: 100%;
}

.select-wrapper select {
  -webkit-appearance: none; /* Remove default style for Chrome, Safari */
  -moz-appearance: none; /* Remove default style for Firefox */
  appearance: none; /* Remove default style for modern browsers */
  width: 100%; /* Make select fill its container */
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: white;
  /* Add padding to make space for the custom arrow */
  padding-right: 30px;
}

.select-wrapper::after {
  content: "";
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 15px;
  height: 15px;
  background-image: url("../assets/dropdown-arrow.png");
  background-size: contain;
  background-repeat: no-repeat;
  pointer-events: none; /* Prevent the pseudo-element from capturing clicks */
}

.card-header,
.card-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.card-body {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
select {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #15cda1;
  color: white;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
}
</style>
