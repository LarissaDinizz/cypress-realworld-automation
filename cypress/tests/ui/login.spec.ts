import LoginPage from "../../pages/LoginPage"

const loginPage = new LoginPage()


describe('Login', () => {
  it('Login - Success', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser('Heath93', 's3cret')
    loginPage.clickSignin()
    loginPage.checkLoginSuccess()
   })

  it('Login - Invalid', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser('Heath93', 'Brasil')
    loginPage.clickSignin()
    loginPage.clickSigninError()
     
  });
});