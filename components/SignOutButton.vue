<script setup lang="ts">
import { authKey } from "../composables/useAuth";

const auth = inject(authKey);
if(!auth) throw new Error('provide missing: auth');
</script>

<template>
  <button
    @click="auth.signOut"
  >
    Sign out
  </button>
</template>

<style scoped>
</style>
