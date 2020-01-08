import {selector, Selector} from 'testcafe'

fixture `Demo`
    .page`https://devexpress.github.io/testcafe/example`
    .before(async t =>{
        //Test setup goes here
    })
    .beforeEach(async t =>{
        //Runs before each test
    })
    .after(async t =>{
        //Clean up goes here
    })
    .afterEach(async t =>{
        //Runs after each test
    })

test("First Test", async t =>{
    const developerName= Selector("#developer-name");
    const submitBtn = Selector("#submit-button")
    await t
    .setTestSpeed(0.5)
    .typeText(developerName, "Yeffrey")
    //.takeScreenshot()
    //.takeElementScreenshot(submitBtn)
    //.wait(1000) //never use this in production environment
    .click(submitBtn)
    .expect(Selector('#article-header').innerText).contains("lel")
    //typeText + params
    .typeText('id','text', {replace:true, paste:true})

    //hover
    .hover('id', {options})
    .pressKey('enter')

    //Key combinations
    .pressKey('shift+down')

    //Navigate to specific URL
    .navigateTo('url')

    //Resize browser window
    .resizeWindow(800,600)
    //Maximum (no param)
    .resizeWindow()

    //Assertions

    // Contains
    //param: message and timeout are optional
    .expect('element or state or actual value').contains('expected value',"message (display if assertion fail)", {timeout:1000})

    //no contains
    .expect('element or state or actual value').notContains('expected value')

    //Equal and not eql 
    .expect('value').eql("expected value",'message (display if assertion fail)')

    //check for true or false (to check if some selector exist in the DOM)
    //check if exist or not exists
    .expect(Selector('#selector').exists).ok()
    .expect(Selector('#selector').exists).notOk("Error message if expect fail")

    //Check if something is greather or less then
    .expect('actual value').gt('expected value', 'message',{options})
    .expect('actual value').lt('expected value', 'message',{options})

    //within and not within
    .expect('actual value').within('start', 'end', 'message',{options})
})    
    