import {Selector} from 'testcafe'
import NavBarPage from '../page-objects/NavBar-Page'

const navBarPage = new NavBarPage()

fixture `Search Test`
.page `http://zero.webappsecurity.com`

test("Search box should work", async t =>{
    //Get selectors
    const searchBox = Selector('#searchTerm')
    const resultTitle = Selector('h2')
    const message = Selector('div')
    //Actions
    //await t.typeText(searchBox, "online bank")
    navBarPage.search("online bank")
    //Assertions
    await t.expect(resultTitle.exists).ok()
    await t.expect(message.innerText).contains('Zero - Free Access to Online Banking')
})