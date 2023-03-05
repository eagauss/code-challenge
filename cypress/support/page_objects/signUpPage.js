import BasePage from "./basePage";

export class SignUpPage extends BasePage {

    signUpButton() {
        return cy.get('[class^="button"]').contains('Sign in and send').scrollIntoView()
        }

    submitButton() {
        return cy.get('button[type="submit"]')
    }

    emailInput() {
        return cy.get('input#email')
    }

    passwordInput() {
        return cy.get('input#password')
    }
}

export default new SignUpPage
