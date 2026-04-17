import { LightningElement, wire } from 'lwc';
import getTasksByStatus from '@salesforce/apex/TaskController.getTasksByStatus';

export default class TaskController extends LightningElement {

    status;
    myStatusList;

    statusOptions = [
        { label: 'In Progress', value: 'In Progress' },
        { label: 'Completed', value: 'Completed' }
    ];

    handleStatusChange(event) {
        this.status = event.detail.value;
    }

    handleLoad() {
        debugger;
        if(this.status==='In Progress'){
           // console.log('I am here new');
        getTasksByStatus({ tStatus: this.status })
            .then(result => {
                this.myStatusList = result;
                //console.log('Task List:: ' +jason.stingyfy(myStatusList));
            })
            .catch(error => {
                console.error(error);
            });

        }
        else{

            console.log('I am here bro');
        }
        
    }
}