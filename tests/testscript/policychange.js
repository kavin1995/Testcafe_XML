import Page from '../page_model/policychangepage';
import Data from '../data/input.json';
import conf, { baseurl } from 'C:/Users/11758/Frameworks/Test_Cafe/.testcaferc.js'
import { Selector } from 'testcafe';
const { setValueToCell } = require('C:/Users/11758/Frameworks/Test_Cafe/tests/testscript/excel.js');
fixture ('Getting Started with Guidewire application')
    .page(conf.baseurl)

//Scenario : Adding the Medical Payment Limit in PA COverages when policy change transaction occurs.    
Data.forEach(data=>{
    test(`Adding Medical Payment Limit as '${data.MedicalPaymentCoverageLimit}'in PA Coverage Screen When Policy Change occurs`,async t=>{    
        await t
        .maximizeWindow()
        .typeText(Page.username, data.Login_username)
        .typeText(Page.password, data.Login_password)
        .click(Page.submitbtn)
        .expect(Selector('[id="DesktopActivities:DesktopActivitiesScreen:0"]').innerText).contains('My Activities')
        .takeScreenshot('LoginSuccessfull.png')
        .pressKey('alt+P')
        .typeText(Page.policyretriveinput, data.PolicyNumber)
        .click(Page.policysearchbutton)
        .click(Page.actionbutton)
        .click(Page.clickpolicychange)
        .takeScreenshot('Policy_Change_Screen.png')
        .click(Page.effectivedatepolicychange)
        .pressKey('ctrl+a')
        .pressKey('backspace')
        .typeText(Page.effectivedatepolicychange,data.Effectivedate)
        .click(Page.nextbuttonpolicychange)
        .click(Page.changenextbutton)
        .click(Page.changenextbutton)
        .click(Page.changenextbutton)
        .click(Page.changenextbutton)
        .click(Page.clickmedicalpayment)
        .pressKey('backspace')
        .typeText(Page.clickmedicalpayment,data.MedicalPaymentCoverageLimit)
        .click(Page.changenextbutton)
        .click(Page.changenextbutton)
        .click(Page.policychangequotebtn)
        .click(Page.issuepolicybtn)
        .click(Page.clickokbtn)
        .takeScreenshot(`Policyissued for limit'${data.MedicalPaymentCoverageLimit}'.png` )

        const filePath = 'C:/Users/11758/Frameworks/Test_Cafe/tests/data/Book1.xlsx';
        const sheetName = 'Sheet1';
        const rowIndex = 2; // Row index starts from 1
        const columnIndex = 3; // Column index starts from 1
        const value = 'Test Value';

        await setValueToCell(filePath, sheetName, rowIndex, columnIndex, value);
    });
});

fixture('Policy change')
    .page(conf.baseurl)

test(`Login`,async t =>{
    await t
    .maximizeWindow()
    
})