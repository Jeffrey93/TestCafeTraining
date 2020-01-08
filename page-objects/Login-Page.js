import {Selector, t} from 'testcafe'

class LoginPage {
    constructor(){
    this.loginForm = Selector('#login_form')
    this.userName = Selector('#user_login')
    this.userPassword = Selector('#user_password')
    this.errorMessageText = Selector('.alert-error')
    }

    async login (user,pass){
        await t
        .typeText(this.userName, user)
        .typeText(this.userPassword, pass)
        .pressKey('enter')
    }
}

export default LoginPage