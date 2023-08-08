// eslint-disable-next-line
/// <reference types="cypress" />

import { faker } from '@faker-js/faker/locale/pt_BR';

import { AuthTypes } from '@/types/auth';

// todo: make absolute imports work
// eslint-disable-next-line no-restricted-imports
import { userFake } from '../../../src/utils/tests/user.fake';

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

    cy.url().should('eq', 'http://localhost:3000/');
  });
});
