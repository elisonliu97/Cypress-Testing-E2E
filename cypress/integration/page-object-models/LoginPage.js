/// <reference types="cypress" />

export class LoginPortal {

    loginPagePortalEl = '.login';
    logoutBtnEl = '.logout';

    // Elements for account creation
    signupEmailInputEl = '#email_create';
    submitCreateEl = '#SubmitCreate';
    firstNameEl = '#customer_firstname';
    lastNameEl = '#customer_lastname';
    passwordEl = '#passwd';
    addressEl = '#address1';
    cityEl = '#city';
    stateEl = '#id_state';
    postCodeEl = '#postcode';
    phoneEl = '#phone_mobile';
    submitAccountEl = '#submitAccount';
    createAccountErrorEl = '#create_account_error';

    // Elements for login
    loginEmailEl = '#email';
    loginSubmitEl = '#SubmitLogin';

    // Elements to add a product and checkout;
    menuEl = '.sf-menu > :nth-child(2) > .sf-with-ul'
    addToCartBtnEl = ':nth-child(2) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span'
    goToCheckoutEl = '.button-container > .button-medium > span'
    checkoutBtnEl = '.cart_navigation > .button > span'
    ToCCheckEl = '#cgv'
    bankwireEl = '.bankwire'
    orderConfirmEl = '.cheque-indent > .dark'

    visitLoginPage() {
        cy.visit('http://automationpractice.com/index.php');
        cy.get(this.loginPagePortalEl).click();
    }

    enterEmailCreate(email) {
        cy.get(this.signupEmailInputEl).type(email);
        cy.get(this.submitCreateEl).click();
    }

    enterFirstName(firstName) {
        cy.get(this.firstNameEl).type(firstName);
    }
    
    enterLastName(lastName) {
        cy.get(this.lastNameEl).type(lastName);
    }

    enterPassword(password) {
        cy.get(this.passwordEl).type(password);
    }

    enterAddress(address) {
        cy.get(this.addressEl).type(address);
    }

    enterCity(city) {
        cy.get(this.cityEl).type(city);
    }

    enterState(state) {
        cy.get(this.stateEl).select(state);
    }

    enterPostCode(postCode) {
        cy.get(this.postCodeEl).type(postCode);
    }

    enterPhoneNumber(phoneNumber) {
        cy.get(this.phoneEl).type(phoneNumber);
    }

    submitAccount() {
        cy.get(this.submitAccountEl).click();
    }

    getCreateAccountError() {
        return cy.get(this.createAccountErrorEl)
    }

    enterEmailLogin(email) {
        cy.get(this.loginEmailEl).type(email);
    }

    enterPasswordLogin(password) {
        cy.get(this.passwordEl).type(password);
    }

    submitLogin() {
        cy.get(this.loginSubmitEl).click();
    }

    getLogoutBtn() {
        return cy.get(this.logoutBtnEl)
    }

    goToProductSection() {
        cy.get(this.menuEl).click();
    }

    addToCart() {
        cy.get(this.addToCartBtnEl).click();
    }

    checkout() {
        cy.get(this.goToCheckoutEl).click();
        cy.get(this.checkoutBtnEl).click();
        cy.get(this.checkoutBtnEl).click();
        cy.get(this.ToCCheckEl).click();
        cy.get(this.checkoutBtnEl).click();
        cy.get(this.bankwireEl).click();
        cy.get(this.checkoutBtnEl).click();
    }

    getConfirmOrder() {
        return cy.get(this.orderConfirmEl)
    }

}