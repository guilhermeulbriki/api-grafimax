import { UserToken } from '@prisma/client';

export default interface IUserTokensRepository {
  generate(user_id: number): Promise<UserToken>;
  findByToken(token: number): Promise<UserToken | null>;
}
