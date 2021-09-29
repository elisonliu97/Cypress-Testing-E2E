/// <reference types="cypress" />
import { LoginPortal } from '../page-object-models/LoginPage';

describe('Create account page tests', () => {
    const loginPortal = new LoginPortal();

    beforeEach(() => {
        loginPortal.visitLoginPage();
    }) 

    it('should be able to create an account given proper credentials', () => {
        loginPortal.fillCreateAccDetails('user1');
        loginPortal.getLogoutBtn().should('be.visible');
    })

    it ('should not be able to create an account using credentials that have already been used', () => {
        loginPortal.useExistingAccDetails('user1');
        loginPortal.getCreateAccountError().should('be.visible');
    })

})