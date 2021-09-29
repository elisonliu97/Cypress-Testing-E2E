/// <reference types="cypress" />
import { LoginPortal } from '../page-object-models/LoginPage';

describe('Tests for created accounts', () => {
    const loginPortal = new LoginPortal();

    it('should be able to login on a created account given proper credentials', () => {
        loginPortal.fillLoginCreds('user1');
        loginPortal.getLogoutBtn().should('be.visible');
    })

    it('should not be able to login when given wrong credentials', () => {
        loginPortal.fillLoginCreds('false-user');
        loginPortal.getLoginBtn().should('be.visible');
    })

    it('should be able to complete a checkout when logged in', () => {
        loginPortal.fillLoginCreds('user1');
        loginPortal.goToProductSection();
        loginPortal.addToCart();
        loginPortal.checkout();
        loginPortal.getConfirmOrder().should('contain', 'Your order on My Store is complete.')
    })
})