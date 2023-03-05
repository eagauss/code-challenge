export class BasePage {
    acceptCookiesButton() {
        return cy.get('section[class*=ConsentBanner] button').contains('Accept').should('be.visible')
    }
}

export default BasePage
