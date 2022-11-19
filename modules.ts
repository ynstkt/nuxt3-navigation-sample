import { IAuthClient } from './domain/repositories/IAuthClient';
import { AuthClientDummy } from './repositories/AuthClientDummy';

const authClient: IAuthClient = new AuthClientDummy();

export {
  authClient,
}
