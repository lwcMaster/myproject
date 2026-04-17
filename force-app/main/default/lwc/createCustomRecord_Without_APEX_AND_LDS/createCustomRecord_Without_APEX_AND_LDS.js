import { LightningElement } from 'lwc';
import Case_object from '@salesforce/schema/Case';
import CASE_SUBJECT from '@salesforce/schema/Case.Subject';
import CASE_DESCRIPTION from '@salesforce/schema/Case.Description';
import CASE_PRIORITY from '@salesforce/schema/Case.Priority';
import { createRecord } from 'lightning/uiRecordApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';


export default class CreateCustomRecord_Without_APEX_AND_LDS extends LightningElement {


    subject='';
    priority='';
    description='';

    get options(){ 
        return [
        { label: 'High', value: 'High' },
        { label: 'Medium', value: 'Medium' },
        { label: 'Low', value: 'Low' }
    ];
}

    handleSubjectChange(event){

        this.subject = event.detail.value;
//console.log('I am here', +this.subject)

    }
    handlePriorityChange(event){
        this.priority = event.detail.value;
        //console.log('I am here', +this.priority)

    }
    handleDescriptionChange(event){
        this.description=  event.detail.value;
               // console.log('I am here', +this.description)


    }

     async handlesave(){
        const fields = {};
        fields[CASE_SUBJECT.fieldApiName] = this.subject;
        fields[CASE_DESCRIPTION.fieldApiName] = this.description;
        fields[CASE_PRIORITY.fieldApiName] = this.priority;
        
        //const record = await createRecord({ apiName: ACCOUNT_OBJECT.objectApiName, fields });
         let recordInput = {apiName: Case_object.objectApiName, fields}
         await createRecord(recordInput)
         .then((record) => {
                alert('Case Created: ' +record.id);

         })
         .catch(error => {
          
            alert('Opps something went wrong: ' +error);
         });
        
    }

    
} 