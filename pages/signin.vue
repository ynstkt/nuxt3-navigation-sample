<script setup lang="ts">
import { authKey } from "../composables/useAuth";

const auth = inject(authKey);
if(!auth) throw new Error('provide missing: auth');
</script>

<template>
  <NuxtLink to="/">Home</NuxtLink>
  <h1>You must sign in</h1>
  <p>user: {{ auth.user }}</p>
  <SignInButton />
</template>