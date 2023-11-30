import { Selector } from "testcafe";

class page{
    constructor(){
        this.username = Selector('[id="Login:LoginScreen:LoginDV:username-inputEl"]') 
        this.password = Selector('[id="Login:LoginScreen:LoginDV:password-inputEl"]')
        this.submitbtn = Selector("span").withAttribute("id", "Login:LoginScreen:LoginDV:submit-btnInnerEl")
        
    }
}
export default new page();