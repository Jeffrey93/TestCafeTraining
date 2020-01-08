import {Selector} from 'testcafe'
import NavBarPage from '../page-objects/NavBar-Page'
import LoginPage from '../page-objects/Login-Page'

const navBarPage = new NavBarPage() 
const loginPage = new LoginPage()

fixture `Login test`
.page `http://zero.webappsecurity.com`

test("Should try to login and get error message", async t =>{

    //Actions
    navBarPage.clickSignInButton()
    loginPage.login('user','pass')
    await t
    .takeScreenshot()
    .expect(loginPage.errorMessageText.innerText).contains('Login and/or password is wrong.', "Message error wasn't shown")
    .expect(loginPage.loginForm.exists).ok()
})