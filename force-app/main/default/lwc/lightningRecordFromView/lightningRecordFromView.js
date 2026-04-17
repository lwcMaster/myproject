
import { LightningElement,api} from 'lwc';

export default class LightningRecordFromView extends LightningElement {

    objectApiName ='Case';
    @api recordId;
    fields=['CaseNumber', 'Priority','Status','Reason'];
    
}