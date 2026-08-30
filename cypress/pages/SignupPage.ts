class SignupPage {

    selectorsList() {
        const selectors = {
            signupButton: "[data-test='signup']",
            firstName: "[name='firstName']",
            lastName: "[name='lastName']",
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            confirmPassword: "[name='confirmPassword']",
            signupSubmit: "[data-test='signup-submit'][type='submit']",
        }

        return selectors
    }
    accessSignupPage() {
        cy.visit('http://localhost:3000')
        cy.get(this.selectorsList().signupButton).click()
    }

    fillSignupForm(firstName, lastName, username, password) {
        cy.get(this.selectorsList().firstName).type(firstName)
        cy.get(this.selectorsList().lastName).type(lastName)
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPassword).type(password)
    }

    fillIncompleteSignupForm(firstName, lastName, username) {
        cy.get(this.selectorsList().firstName).type(firstName)
        cy.get(this.selectorsList().lastName).type(lastName)
        cy.get(this.selectorsList().usernameField).type(username)
        }

    clickSignupSubmit() {
        cy.get(this.selectorsList().signupSubmit).click()
    }

    checkRedirectToSignin(){
        cy.url().should('include', '/signin');
    }

    checkSignupButtonDisabled() {
        cy.get(this.selectorsList().signupSubmit).should('be.disabled')
    }

}

export default SignupPage