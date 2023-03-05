import BasePage from "./basePage";

export class CurrencyConverterPage extends BasePage {

    amountInput() {
        return cy.get('.amount-input input')
    }

    fromCurrencyDropdown() {
        return cy.get('input[id="midmarketFromCurrency"]')
    }

    fromCurrencyDropdownList() {
        return cy.get('[id="midmarketFromCurrency-listbox"]').find('li')
    }

    errorText() {
        return cy.get('[class*="currency-converter__ErrorText"]')
    }

    convertButton() {
        return cy.get('[class*="currency-converter__SubmitZone"] button')
    }
}

export default new CurrencyConverterPage
