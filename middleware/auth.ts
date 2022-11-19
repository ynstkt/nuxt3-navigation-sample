import { authClient } from '../modules';

export default defineNuxtRouteMiddleware(async (to, from) => {
  if ((await authClient.isAuthenticated()) === false) {
    return navigateTo('/signin')
  }
})
