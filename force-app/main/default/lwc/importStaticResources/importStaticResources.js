import { LightningElement } from 'lwc';
import user_Info from "@salesforce/user/Id";
//import user_Info from "@salesforce/user/Name";

export default class ImportStaticResources extends LightningElement {

currentUser = user_Info;
printArray = [

    {id: 1,name: "John", age: 30},
    {id:2, name: "IK", age:34 }
];

get formattedArray() {
    return this.printArray.map(item => {
        return {
            ...item,
            fullData: JSON.stringify(item)
        };
    });
}

}