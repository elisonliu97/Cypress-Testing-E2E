/// <reference types="cypress" />
import { LoginPortal } from '../page-object-models/LoginPage';

describe('Tests for created accounts', () => {
    const loginPortal = new LoginPortal();
    const userData = [
        {
            email: 'testuser2@email.com',
            firstName: 'testtwo',
            lastName: 'user',
            password: 'passtesttwo',
            address: '2 test drive',
            city: 'Test City',
            state: 'Iowa',
            postCode: '10101',
            phoneNumber: '1234567890'
        },
    ]

    it('should be able to login on a created account given proper credentials', () => {
        loginPortal.visitLoginPage();
        loginPortal.enterEmailLogin(userData[0].email);
        loginPortal.enterPasswordLogin(userData[0].password);
        loginPortal.submitLogin();
        loginPortal.getLogoutBtn().should('be.visible');
    })

    it('should be able to complete a checkout when logged in', () => {
        loginPortal.visitLoginPage();
        loginPortal.enterEmailLogin(userData[0].email);
        loginPortal.enterPasswordLogin(userData[0].password);
        loginPortal.submitLogin();
        loginPortal.goToProductSection();
        loginPortal.addToCart();
        loginPortal.checkout();
        loginPortal.getConfirmOrder().should('contain', 'Your order on My Store is complete.')
    })
})