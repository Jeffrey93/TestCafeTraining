import {Selector, t} from 'testcafe'

class NavBarPage{
    constructor(){
        this.searchBox= Selector('#searchTerm')
        this.singIngButton = Selector('#signin_button')
    }

    async search(text){
        await t
        .typeText(this.searchBox,text, {paste:true, replace:true})
        .pressKey('enter')
    }

    async clickSignInButton(){
        await t.click(this.singIngButton)
    }
}
export default NavBarPage