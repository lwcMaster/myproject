import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {

displayNone = true;

displayFirst = false;
displySecond = false;
displayThird = false;

firstOption(){
    console.log('Coming to fiirst value');
    this.displayFirst = true;
    this.displySecond = false;
this.displayThird = false;
}
secondOption(){
    console.log('Coming to second value');
    this.displySecond = true;
    this.displayFirst = false;
    this.displayThird = false;

}
thirdOption(){
console.log('Coming to third value');
    this.displayThird = true;
    this.displayFirst = false;
this.displySecond = false;
}


}