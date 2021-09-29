/// <reference types="cypress" />
import { LoginPortal } from '../page-object-models/LoginPage';

describe('Create account page tests', () => {
    const loginPortal = new LoginPortal();

    beforeEach(() => {
        loginPortal.visitLoginPage();
    }) 

    // GIVEN proper credentials with only the bare minimum information necessary
    // WHEN a user signs up for an account
    // THEN it should create an account and log the user in
    it('should be able to create an account given proper credentials', () => {
        loginPortal.fillCreateAccDetails('user1');
        loginPortal.getLogoutBtn().should('be.visible');
    })

    // GIVEN proper credentials with some extra information
    // WHEN a user signs up for an account
    // THEN it should create an account and log the user in
    it('should be able to create another account given proper credentials', () => {
        loginPortal.fillCreateAccDetails('user2');
        loginPortal.getLogoutBtn().should('be.visible');
    })

    // GIVEN proper credentials with full information for signup
    // WHEN a user signs up for an account
    // THEN it should create an account and log the user in
    it('should be able to create another account given differing credentials', () => {
        loginPortal.fillCreateAccDetails('user3');
        loginPortal.getLogoutBtn().should('be.visible');
    })

    // GIVEN credentials that are already registered
    // WHEN a user signs up for an account
    // THEN it should give an error saying that an account already exists
    it ('should not be able to create an account using credentials that have already been used', () => {
        loginPortal.useExistingAccDetails('user1');
        loginPortal.getCreateAccountError().should('be.visible');
    })

})