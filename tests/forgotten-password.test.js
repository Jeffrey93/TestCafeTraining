import {Selector} from 'testcafe'
fixture `Login test`
.page `http://zero.webappsecurity.com`

test("Should try to login and get error message", async t =>{
    //Get selectors
    const signinButton = Selector('#signin_button')
    //Tags links - key is read the text inside
    const linkToPassword = Selector('a').withText('Forgot your password ?');
    const userEmail = Selector('#user_email')
    const message = Selector('div')
    //Actions
    await t
    .click(signinButton)
    .click(linkToPassword)
    .typeText(userEmail,'email@email.com', {paste:true})
    .setTestSpeed(0.5)
    .pressKey('enter')

    //Assertions
    .takeScreenshot()
    .expect(message.innerText).contains('Your password will be sent to the following email:', "Message email sended wasn't displayed")
    .expect(userEmail.exists).notOk()


})