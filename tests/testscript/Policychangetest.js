import { fixture,Selector} from 'testcafe';
import Loc from '../locators/LoginLocators'
import polloc from '../locators/PolicyChangeLocators'
import {mouseclick,textbox} from'../utils'
import link from '../config'
class polchange{
  policychange()
  {
    fixture`Change Policy`
    .page (link.url);
    test(`Policy Change for New Business Policy`,async t=>{
      //console.log("Policy Change")
      await t.maximizeWindow()
      await textbox(Loc.username,'exp_test')
      await textbox(Loc.password,'exp_test')
      await mouseclick(Loc.loginbutton)
      await t.pressKey('alt+P');
      await mouseclick(CancelLoc.enterpolicynum)
      await textbox(CancelLoc.enterpolicynum,'8586186712')
      await t.pressKey('enter')
      await mouseclick(polloc.actionbutton)
      await mouseclick(polloc.clickpolicychange)
      await mouseclick(polloc.nextbuttonpolicychange)
      await mouseclick(polloc.changenextbutton)
      await mouseclick(polloc.changenextbutton)
      await mouseclick(polloc.changenextbutton)
      await mouseclick(polloc.polcostnew)
      await t.pressKey('ctrl+a')
      await t.pressKey('backspace')
      await textbox(polloc.polcostnew,'2$s')
      await mouseclick(polloc.changenextbutton)
      const costnewmsg = Selector(polloc.errormsg).innerText;
      const cerror = await costnewmsg
      console.log("Error: "+cerror);
      if(cerror){
      await t.takeScreenshot(`Policy Change error: ${cerror}'.png` );
      }
      })
  }
  }

export default new polchange();
    
    