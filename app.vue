<script setup lang="ts">
import { authKey, useAuth } from "./composables/useAuth";

const auth = useAuth();
auth.subscribeUser();

provide(authKey, auth);
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
