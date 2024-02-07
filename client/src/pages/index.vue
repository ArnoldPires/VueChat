<template>
  <VContainer>
    <VForm @submit.prevent="onSubmit">
      <VCard max-width="600" class="mx-auto pa-5">
        <VCardTitle>
          <div class="d-flex align-center justify-center">
            <VIcon icon="mdi-chat" />
            <h3 class="ml-2">UPchieve Chat</h3>
          </div>
        </VCardTitle>
        <VCardText class="py-4">
          <VTextField
            label="Username"
            v-model="state.username"
            :rules="[(v) => !!v || 'Username is required']"
          ></VTextField>
          <VSelect :items="rooms" label="Room" v-model="state.room"></VSelect>
        </VCardText>
        <VCardActions>
          <VBtn
            block
            color="primary"
            :disabled="!state.username || !state.room"
            variant="outlined"
            type="submit"
          >
            Join The Chat
          </VBtn>
        </VCardActions>
      </VCard>
    </VForm>
  </VContainer>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
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
