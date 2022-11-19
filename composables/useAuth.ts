import { ref, Ref, InjectionKey } from 'vue';

import { User } from '../domain/models/User';
import { authClient } from '../modules';

export type Auth = ReturnType<typeof useAuth>;

export const authKey: InjectionKey<Auth> = Symbol('auth');

export function useAuth() {
  
  const user: Ref<User> = ref({
    isAuthenticated: false,
    name: 'not signed in',
  });  

  const router = useRouter();

  const signIn = async () => {
    authClient.signIn().then(() => {
      console.log('sign in succeeded');
      router.push('/');
    }).catch((err) => {
      console.log(err.message);
    });
  }

  const signOut = () => {
    authClient.signOut();
    router.push('/signin');
  }

  const subscribeUser = () => {
    return authClient.subscribeUser(user.value);
  }

  return {
    user,
    signIn,
    signOut,
    subscribeUser,
  }
}