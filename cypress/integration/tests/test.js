/// <reference types="cypress" />
import { LoginPortal } from '../page-object-models/LoginPage';

describe('Create account page tests', () => {
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
        }
    ]

    beforeEach(() => {
        loginPortal.visitLoginPage();
    }) 

    it('should be able to create an account given proper credentials', () => {
        loginPortal.enterEmailCreate(userData[0].email);
        loginPortal.enterFirstName(userData[0].firstName);
        loginPortal.enterLastName(userData[0].lastName);
        loginPortal.enterPassword(userData[0].password);
        loginPortal.enterAddress(userData[0].address);
        loginPortal.enterCity(userData[0].city);
        loginPortal.enterState(userData[0].state);
        loginPortal.enterPostCode(userData[0].postCode);
        loginPortal.enterPhoneNumber(userData[0].phoneNumber);
        loginPortal.submitAccount();
    })

    it('should be able to login on a created account given proper credentials', () => {
        loginPortal.enterEmailLogin(userData[0].email);
        loginPortal.enterPasswordLogin(userData[0].password);
        loginPortal.submitLogin();
    })
})