import SignupPage from "../../pages/SignupPage";

const signupPage = new SignupPage()

describe('New User Registration', () => {
  it('Registration - Success', () => {

    const username = `manoelalima${Date.now()}`;

    signupPage.accessSignupPage()
    signupPage.fillSignupForm('Manoela', 'Lima', username,'Brasil2025')
    signupPage.clickSignupSubmit()
    signupPage.checkRedirectToSignin()
     
  });

  it('Registration - Incomplete Information', () => {
    const username = `manoelalima${Date.now()}`;

    signupPage.accessSignupPage()
    signupPage.fillIncompleteSignupForm('Manoela', 'Lima', username)
    signupPage.checkSignupButtonDisabled()

  });
});
