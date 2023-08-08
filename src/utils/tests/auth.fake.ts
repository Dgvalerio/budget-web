import { faker } from '@faker-js/faker/locale/pt_BR';

import { AuthTypes } from '@/types/auth';
import { userFake } from '@/utils/tests/user.fake';

export const authFake = (): AuthTypes.Dto => ({
  user: userFake(),
  token: faker.string.alphanumeric(),
});
