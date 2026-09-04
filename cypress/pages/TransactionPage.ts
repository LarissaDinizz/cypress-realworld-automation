class TransactionPage {

  selectorsList() {
    const selectors = {
      newTransactionButton: "[href='/transaction/new'][tabindex='0']",
      searchField: "[placeholder='Search...']",
      userListItem: "[data-test='user-list-item-GjWovtg2hr']",
      amountField: "[placeholder='Amount']",
      noteField: "[placeholder='Add a note']",
      submitTransactionButton: "[data-test='transaction-create-submit-request']",
      successAlert: "[data-test='alert-bar-success']",
      errorAlert: "[data-test='alert-bar-error']",
    };

    return selectors;
    
  }

    accessNewTransaction(searchField, amountField, noteField) {
      cy.get(this.selectorsList().newTransactionButton).click()
      cy.get(this.selectorsList().searchField).click().type(searchField)
      cy.get(this.selectorsList().userListItem).click()
      cy.get(this.selectorsList().amountField).click().type(amountField)
      cy.get(this.selectorsList().noteField).click().type(noteField)
      cy.get(this.selectorsList().submitTransactionButton).click()

    }

    checkTransactionSuccess() {
      cy.get(this.selectorsList().successAlert).should('be.visible')
    }
    
    checkTransactionError() {
        cy.get(this.selectorsList().errorAlert).should('be.visible')
    }

}

export default TransactionPage

