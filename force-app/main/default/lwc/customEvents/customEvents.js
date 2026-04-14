import { LightningElement } from 'lwc';

export default class CustomEvents extends LightningElement {

    showDetailOfChild;
    handleProductSelection(event){

        this.showDetailOfChild = event.detail;
    }
}