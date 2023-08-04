import { UserTypes } from '@/types/user';

export namespace AuthTypes {
  export interface Dto {
    user: UserTypes.Dto;
    token: string;
  }
}
