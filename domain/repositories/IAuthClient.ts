import { User } from "../models/User";

export interface IAuthClient {
  signIn: () => Promise<void>;
  signOut: () => void;
  isAuthenticated: () => Promise<unknown>;
  subscribeUser(user: User): () => void;
}
