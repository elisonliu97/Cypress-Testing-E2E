/// <reference types="cypress" />
import { LoginPortal } from '../page-object-models/LoginPage';

describe('Tests for created accounts', () => {
    const loginPortal = new LoginPortal();

    // GIVEN proper credentials to an already existing account
    // WHEN the user logs in
    // THEN it logs the user in and the logout button should be visible
    it('should be able to login on a created account given proper credentials', () => {
        loginPortal.fillLoginCreds('user1');
        loginPortal.getLogoutBtn().should('be.visible');
    })

    // GIVEN false credentials
    // WHEN the user tries to log in
    // THEN it should display an error message and the login button should still be visible
    it('should not be able to login when given wrong credentials', () => {
        loginPortal.fillLoginCreds('false-user');
        loginPortal.getLoginBtn().should('be.visible');
    })

    // GIVEN a logged in account
    // WHEN the user tries to complete an order checkout
    // THEN the user should get to a page that confirms the order
    it('should be able to complete a checkout when logged in', () => {
        loginPortal.fillLoginCreds('user1');
        loginPortal.goToProductSection();
        loginPortal.addToCart();
        loginPortal.checkout();
        loginPortal.getConfirmOrder().should('contain', 'Your order on My Store is complete.')
    })
})