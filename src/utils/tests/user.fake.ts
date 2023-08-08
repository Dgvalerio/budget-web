import { faker } from '@faker-js/faker/locale/pt_BR';

import { UserTypes } from '@/types/user';

export const userFake = (): UserTypes.Dto => ({
  id: faker.string.alphanumeric(),
  githubId: faker.number.int(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  avatarUrl: faker.internet.avatar(),
});
