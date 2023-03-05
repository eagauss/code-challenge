import SignUpPage from "../support/page_objects/signUpPage";
import * as URL from "../fixtures/URLs.json";
import * as data from "../fixtures/inputData.json";

describe('Sign in and Register with Email and Password', () => {
    beforeEach(() => {
        cy.visit(URL.sendMoney)
        SignUpPage.acceptCookiesButton().click()
        SignUpPage.signUpButton().click()
        cy.url()
            .should('contain', URL.signUp)
    })

    it('Send 10 GBP to EUR and validate the converted amount after calculation', () => {
        SignUpPage.submitButton()
            .should('be.disabled')
        SignUpPage.emailInput().type(data.email)
        SignUpPage.passwordInput().type(data.password)
        SignUpPage.submitButton()
            .should('not.be.disabled')
    })
})
