// How it works (Important for interview)
//getRecord → fetches entire record data
//getFieldValue → safely extracts specific field value
//@wire → reactive (auto refresh if recordId changes)



import { LightningElement, api,wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import Account_PHONE from '@salesforce/schema/Account.Phone';
export default class GetRecordAndgetFieldvalue extends LightningElement {

@api recordId;

@wire(getRecord, { recordId: '$recordId', fields: [ACCOUNT_NAME, Account_PHONE] })
account;

get name(){

    return getFieldValue(this.account.data, ACCOUNT_NAME);

}
get phone(){

    return getFieldValue(this.account.data, Account_PHONE)

}
}
/*Pro Tip (Interviewer Trick Question)

If they ask:
👉 Why not Apex instead of getRecord?

Answer:

getRecord → no Apex needed, faster, uses LDS (Lightning Data Service)
Automatic caching & security (FLS, sharing rules)*/