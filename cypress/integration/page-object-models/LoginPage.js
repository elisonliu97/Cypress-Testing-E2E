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
    titleMEl = '#id_gender1';
    titleFEl = '#id_gender2';
    dayEl = '#days';
    monthEl = '#months';
    yearEl = '#years';
    optinEl = '#optin';
    companyEl = '#company';
    address2El = '#address2';
    countryEl = '#id_country';
    otherEl = '#other';
    homephoneEl = '#phone';
    aliasEl = '#alias';
    newsletterEl = '#newsletter';
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

    // from homepage, go to login page
    visitLoginPage() {
        cy.visit('http://automationpractice.com/index.php');
        cy.get(this.loginPagePortalEl).click();
    }

    // account creation helper functions
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

    enterTitle(title) {
        if (title === 'Mr.') {
            cy.get(this.titleMEl).click();
        } else if (title === "Mrs.") {
            cy.get(this.titleFEl).click();
        }
    }

    enterDoB(dob) {
        cy.get(this.dayEl).select(dob.day);
        cy.get(this.monthEl).select(dob.month);
        cy.get(this.yearEl).select(dob.year);
    }

    checkNewsletter(check) {
        if (check) {
            cy.get(this.newsletterEl).click();
        }
    }

    checkOptin(opt) {
        if (opt) {
            cy.get(this.optinEl).click();
        }
    }

    enterCompany(company) {
        cy.get(this.companyEl).type(company);
    }

    enterAddress2(address2) {
        cy.get(this.address2El).type(address2);
    }

    enterOther(other) {
        cy.get(this.otherEl).type(other);
    }

    enterHomePhone(homePhone) {
        cy.get(this.homephoneEl).type(homePhone);
    }

    enterAlias(alias) {
        cy.get(this.aliasEl).type(alias);
    }

    submitAccount() {
        cy.get(this.submitAccountEl).click();
    }

    getCreateAccountError() {
        return cy.get(this.createAccountErrorEl)
    }

    // test function to create new account
    fillCreateAccDetails(userDataFixture) {
        cy.fixture(userDataFixture).then((data) => {
            // essential
            this.enterEmailCreate(data.email);
            this.enterFirstName(data.firstName);
            this.enterLastName(data.lastName);
            this.enterPassword(data.password);
            this.enterAddress(data.address);
            this.enterCity(data.city);
            this.enterState(data.state);
            this.enterPostCode(data.postCode);
            this.enterPhoneNumber(data.phoneNumber);

            // extra
            if (data.title) {
                this.enterTitle(data.title);
            }
            if (data.dob) {
                this.enterDoB(data.dob);
            }
            if (data.newsletter) {
                this.checkNewsletter(data.newsletter);
            }
            if (data.optin) {
                this.checkOptin(data.optin);
            }
            if (data.company) {
                this.enterCompany(data.company);
            }
            if (data.address2) {
                this.enterAddress2(data.address2);
            }
            if (data.other) {
                this.enterOther(data.other);
            }
            if (data.homePhone) {
                this.enterHomePhone(data.homePhone);
            }
            if (data.alias) {
                this.enterAlias(data.alias);
            }

            // submit
            this.submitAccount();
        })
    }

    // test function to only input email data
    useExistingAccDetails(userDataFixture) {
        cy.fixture(userDataFixture).then((data) => {
            this.enterEmailCreate(data.email)
        })
    }

    // portion for login validation
    // helper functions for validation
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

    getLoginBtn() {
        return cy.get(this.loginPagePortalEl)
    }

    fillLoginCreds(userDataFixture) {
        cy.fixture(userDataFixture).then((data) => {
            this.visitLoginPage();
            this.enterEmailLogin(data.email);
            this.enterPasswordLogin(data.password);
            this.submitLogin();
        })
    }

    // portion for checkout validation
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