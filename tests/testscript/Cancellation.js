import { fixture,Selector} from 'testcafe'
import {dropdown,mouseclick,textbox} from'./utils'
import CancelLoc from './locators/CancellationLocators'
import Loc from './locators/LoginLocators'
import link from './config'
fixture`Policy Cancellation`
.page(link.url)

test('Cancellation',async t=>{
    await t.maximizeWindow()
    await textbox(Loc.username,'exp_test')
    await textbox(Loc.password,'exp_test')
    await mouseclick(Loc.loginbutton)
    await t.pressKey('alt+P')
    await mouseclick(CancelLoc.enterpolicynum)
    await textbox(CancelLoc.enterpolicynum,'9085180972')
    await t.pressKey('enter')
    await mouseclick(CancelLoc.actionbutton)
    await mouseclick(CancelLoc.cancelbutton)
    await dropdown(CancelLoc.source,'Insured')
    await dropdown(CancelLoc.reason,'Policy not-taken')
    await mouseclick(CancelLoc.startcancelbutton)
    await mouseclick(CancelLoc.bind)
    await mouseclick(CancelLoc.cancelnowbutton)
    await mouseclick(CancelLoc.okbutton)
    base.getdata().polnum

})