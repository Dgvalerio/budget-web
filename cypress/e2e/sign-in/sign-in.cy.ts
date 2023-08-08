// eslint-disable-next-line
/// <reference types="cypress" />

import { faker } from '@faker-js/faker/locale/pt_BR';

import { AuthTypes } from '@/types/auth';
import { UserTypes } from '@/types/user';

export const userFake = (): UserTypes.Dto => ({
  id: faker.string.alphanumeric(),
  githubId: faker.number.int(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  avatarUrl: faker.internet.avatar(),
});

export const authFake = (): AuthTypes.Dto => ({
  user: userFake(),
  token: faker.string.alphanumeric(),
});

describe('Sign In', () => {
  beforeEach(() => {
    cy.visit(`/sign-in`);
  });

  it('make login with e-mail and password', () => {
    cy.get('input[name="email"]').type(faker.internet.email());

    cy.get('input[name="password"]').type(
      faker.string.alphanumeric({ length: 8 })
    );

    cy.intercept({ method: 'POST', url: '/auth/sign-in' }, authFake());

    cy.get('button[type="submit"]').click();

    // cy.get('[data-test-id="password-error"]').should(($item) => {
    //   expect($item.first()).to.contain('Esse usuário não existe!');
    // });
  });
});
