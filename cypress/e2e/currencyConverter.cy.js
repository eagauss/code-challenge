import CurrencyConverterPage from "../support/page_objects/currencyConverterPage";
import * as URL from '../fixtures/URLs.json';
import * as data from "../fixtures/inputData.json";
import * as text from "../fixtures/assertions.json";

describe('Send 10 GBP to EUR and validate the converted amount after calculation', () => {
    beforeEach(() => {
        cy.visit(URL.currencyConverter)
        CurrencyConverterPage.acceptCookiesButton().click()
    })

    it('The input field "Amount" shows the error message "Please enter a valid amount"  when alphabet characters ' +
        'are entered instead of numerical characters', () => {
        CurrencyConverterPage.amountInput().type(data.amount)
        CurrencyConverterPage.errorText()
            .should('be.visible')
            .should('have.text', text.currencyConverterError)
    })

    it('Dropdown "From" field features the option "INR - Indian Rupee"', () => {
        CurrencyConverterPage.fromCurrencyDropdown().click().then(() => {
            CurrencyConverterPage.fromCurrencyDropdownList()
                .should('contain.text', text.indianRupee)
        })
    })

    it('The button on the conversion form features the value "Convert"', () => {
        CurrencyConverterPage.convertButton()
            .should('have.text', text.convertButton)
    })
})
