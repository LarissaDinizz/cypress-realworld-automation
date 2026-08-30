class LoginPage {

    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            signinError: "[data-test='signin-error']",
        }

        return selectors
    }

    accessLoginPage() {
        cy.visit('http://localhost:3000')
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
    }

    clickSignin() {
        cy.get(this.selectorsList().loginButton).click()
    }

    checkLoginSuccess() {
    cy.get("[data-test='sidenav-home']").should('be.visible')
    }
    
    clickSigninError() {
        cy.get(this.selectorsList().signinError).should('be.visible')
    }
}

export default LoginPage



