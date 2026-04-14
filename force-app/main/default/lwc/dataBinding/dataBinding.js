import { LightningElement, track } from 'lwc';

export default class DataBinding extends LightningElement {

        myStatus;
        totalLessonWatched= 50;
        showMyStatus(event){
         console.log('Target value'+event.target.value);

            this.myStatus= event.target.value;

        }
        get handleMinutesWatched(){
            console.log('totalLessonWatched' +this.totalLessonWatched);
           return this.totalLessonWatched * 10;


        }

}