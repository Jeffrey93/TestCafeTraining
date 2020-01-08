import {Selector} from 'testcafe'
fixture `Feedback form test`
.page `http://zero.webappsecurity.com`

test("Should submit feedback form", async t =>{
    //Get selectors
    
    const linkToFeedback = Selector('#feedback');
    const form_name = Selector('#email')
    const form_name = Selector('#email')
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