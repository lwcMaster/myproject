import { LightningElement } from 'lwc';

export default class ChildToTriggerEvent extends LightningElement {

    selectedProduct;
    handleFiringEvent(){

        this.selectedProduct =  'Googly';

        //Create custom event to send data from child to parent

        const event = new CustomEvent('sendproductselected',{ detail: this.selectedProduct });

        //As soon as we created custom event to send data to parent we need to dispach it

        this.dispatchEvent(event);  
    }

}