import LoginPage from "../../pages/LoginPage"
import TransactionPage from "../../pages/TransactionPage"

const loginPage = new LoginPage()
const transactionPage = new TransactionPage()


describe('New Transaction', () => {
  it('Transaction - Success', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser('Heath93', 's3cret')
    loginPage.clickSignin()

    transactionPage.accessNewTransaction('Kristian Bradtke','10', 'TEST')
    transactionPage.checkTransactionSuccess()
   })

  it('Transaction - Invalid', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser('Heath93', 's3cret')
    loginPage.clickSignin()

    transactionPage.accessNewTransaction('Kristian Bradtke','30000000', 'TEST')
    transactionPage.checkTransactionError()
     
  });
});
