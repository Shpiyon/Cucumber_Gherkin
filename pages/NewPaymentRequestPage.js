import { BasePage } from "./BasePage";
const NewPaymentRequestForm = require('../pages/components/NewPaymentRequestForm')

class NewPaymentRequestPage extends BasePage{
    constructor() {
        super('transaction/new', [NewPaymentRequestForm]);
        this.NewPaymentRequestForm = NewPaymentRequestForm;
    }
}

module.exports = new NewPaymentRequestPage()