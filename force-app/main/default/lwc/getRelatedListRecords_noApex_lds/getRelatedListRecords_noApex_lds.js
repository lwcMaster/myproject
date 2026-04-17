import { LightningElement, api, wire } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';
import { NavigationMixin } from 'lightning/navigation'; // Import this!

export default class GetRelatedListRecords_noApex_lds extends NavigationMixin(LightningElement) {
    @api recordId;
    records;
    error;

    @wire(getRelatedListRecords, {
        parentRecordId: '$recordId',
        relatedListId: 'Opportunities',
        fields: ['Opportunity.Id', 'Opportunity.Name', 'Opportunity.StageName']
    })
    wiredRelatedRecords({ error, data }) {
        if (data) {
            this.records = data.records;
        } else if (error) {
            this.error = error;
        }
    }

    // This function handles the "Jump" logic
    navigateToOpp(event) {
        const oppId = event.target.dataset.id; // Get ID from the clicked element
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: oppId,
                actionName: 'view'
            }
        });
    }
}