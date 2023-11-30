import { Selector } from 'testcafe';
class polchangeLoc {
    constructor(){
        this.policyretriveinput =Selector('[id="TabBar:PolicyTab:PolicyTab_PolicyRetrievalItem-inputEl"]')

        this.policysearchbutton = Selector('[id="TabBar:PolicyTab:PolicyTab_PolicyRetrievalItem_Button"]')

        this.actionbutton = Selector ('[id="PolicyFile:PolicyFileMenuActions-btnEl"]'),

        this.clickpolicychange = Selector ('[id="PolicyFile:PolicyFileMenuActions:PolicyFileMenuActions_NewWorkOrder:PolicyFileMenuActions_ChangePolicy-itemEl"]')

        this.effectivedatepolicychange = Selector('[id="StartPolicyChange:StartPolicyChangeScreen:StartPolicyChangeDV:EffectiveDate_date-inputWrap"]')

        this.nextbuttonpolicychange = Selector('[id="StartPolicyChange:StartPolicyChangeScreen:NewPolicyChange-btnInnerEl"]')

        this.discription = Selector ('[id="StartPolicyChange:StartPolicyChangeScreen:StartPolicyChangeDV:Description-inputEl"]')

        this.changenextbutton = Selector ('[id="PolicyChangeWizard:Next-btnInnerEl"]')

        this.changeofferbutton = Selector('[id="PolicyChangeWizard:OfferingScreen:OfferingSelection-inputEl"]')

        this.policychangequotebtn =Selector ('[id="PolicyChangeWizard:PolicyChangeWizard_DifferencesScreen:JobWizardToolbarButtonSet:QuoteOrReview-btnInnerEl"]')

        this.clickPAcoverage = Selector ('[id="PolicyChangeWizard:LOBWizardStepGroup:PALine"]')

        this.clickmedicalpayment = Selector('[id="PolicyChangeWizard:LOBWizardStepGroup:LineWizardStepSet:PersonalAutoScreen:PersonalAuto_AllVehicleCoveragesDV:PALiabCategoryIterator:1:CoverageInputSet:CovPatternInputGroup:0:CovTermInputSet:OptionTermInput-inputEl"]')

        this.issuepolicybtn = Selector('[id="PolicyChangeWizard:PolicyChangeWizard_QuoteScreen:JobWizardToolbarButtonSet:BindPolicyChange"]')

        this.clickokbtn = Selector('[id="button-1005"]')
        this.polcostnew=Selector('[id="PolicyChangeWizard:LOBWizardStepGroup:LineWizardStepSet:PAVehiclesScreen:PAVehiclesPanelSet:VehiclesListDetailPanel:VehiclesDetailsCV:PersonalAuto_VehicleDV:CostNew_DV-inputEl"]')
        this.errormsg=Selector('[id="PolicyChangeWizard:LOBWizardStepGroup:LineWizardStepSet:PAVehiclesScreen:_msgs"]')
    }
}
export default new polchangeLoc(); 