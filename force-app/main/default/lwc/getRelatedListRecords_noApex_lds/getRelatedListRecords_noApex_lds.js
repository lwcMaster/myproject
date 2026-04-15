import { LightningElement, api, wire } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';

export default class GetRelatedListRecords_noApex_lds extends LightningElement {
    @api recordId;
    error;
    records;

    @wire(getRelatedListRecords, {
        parentRecordId: '$recordId',
        relatedListId: 'Opportunities', 
        fields: ['Opportunity.Name', 'Opportunity.StageName']
    })
    wiredRecords({ error, data }) { // 1. Renamed this to avoid conflict with 'records' variable
        if(data) { // 2. 'if' must be lowercase
            this.records = data.records;
            this.error = undefined;
        } else if(error) { // 3. 'else if' must be two separate words
            this.error = error;
            this.records = undefined;
        }
    }
}