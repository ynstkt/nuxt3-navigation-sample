<script setup lang="ts">
import { authKey } from "../composables/useAuth";

definePageMeta({
  middleware: 'auth'
})

const auth = inject(authKey);
if(!auth) throw new Error('provide missing: auth');
</script>

<template>
  <NuxtLink to="/signin">Sign In</NuxtLink>
  <h1>Welcome to the homepage</h1>
  <p>user: {{ auth.user }}</p>
  <SignOutButton />
</template>