import Page from '../page_model/loginpage';
fixture ('Getting Started with Guidewire application')
    .page('http://192.168.20.201:8180/pc/PolicyCenter.do');

test('Guidewire Application Login',async t=>{    
    await t.typeText(Selector('[id="Login:LoginScreen:LoginDV:username-inputEl"]', 'exp_test'))
    await t.typeText(Page.password, 'exp_test')
    await t.click(Page.submitbtn)
    //await t.expect(Selector('[id="title-1192-textEl"]').innerText).contains('My Activities')
})   

