import { User } from '../domain/models/User';
import { IAuthClient } from '../domain/repositories/IAuthClient';

export class AuthClientDummy implements IAuthClient {

  private user: User | undefined;

  constructor() {
  }

  public async signIn() {
    this.user!.name = 'dummy';
    this.user!.isAuthenticated = true;
  }

  public signOut() {
    this.user!.name = 'not signed in';
    this.user!.isAuthenticated = false;
  }

  public async isAuthenticated() {
    return this.user && this.user.isAuthenticated;
  }

  public subscribeUser(user: User): () => void {
    this.user = user;
    return () => {};
  }
}
