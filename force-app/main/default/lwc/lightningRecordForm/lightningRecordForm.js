import { LightningElement, api } from 'lwc';

export default class lightningRecordForm extends LightningElement {

    @api recordId;
    objectApiName ='Case';
    fields=[  'Priority','Status','Reason'];
    caseIds;
}
