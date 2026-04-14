import { LightningElement, track } from 'lwc';

export default class ZodiacSignMessenger extends LightningElement {
    //Name Input
        //Date of birth input
        //Submit Button
            // do the logic for extracting the date of birth-month and day
          //  just going to check  with my zodiac master data as to which zodiac sign it falss into
        

        name ='';
        userBirthDate ='';
        @track userProfile = {};
        zodiacTraits = [
    {
        sign: 'Capricorn',
        from: '12-22',
        to: '01-19',
        emoji: '🐐',
        trait: "You are disciplined, practical, and quietly ambitious. You don’t just chase goals—you build them brick by brick."
    },
    {
        sign: 'Aquarius',
        from: '01-20',
        to: '02-18',
        emoji: '💧',
        trait: "You're a thinker, a dreamer, and often the most original person in the room. Rules were made to be rewritten by you."
    },
    {
        sign: 'Pisces',
        from: '02-19',
        to: '03-20',
        emoji: '🐟',
        trait: "Your heart is a sponge for the world’s emotions, and your imagination could paint entire galaxies. You give endlessly."
    },
    {
        sign: 'Aries',
        from: '03-21',
        to: '04-19',
        emoji: '🔥',
        trait: "You’re a natural-born leader—bold, driven, and full of fire. When you set your mind to something, there’s no stopping you."
    }
];




        handleNameChange(event){
            this.name = event.target.value;

        }
        handleDateChange(event){

            this.userBirthDate = event.target.value;


        }
        handleSubmit(){

            console.log('Data recived' +this.userBirthDate);
            let userDob = new Date(this.userBirthDate)
            const userMonth = userDob.getMonth() + 1;
            const userDate = userDob.getDate();
            this.userProfile = this.checkedZodiacSign(userMonth,userDate);

        }
        checkedZodiacSign(month, day){
        console.log('Data is recieved' +month);
        console.log('Data is recieved' +day);

            for(let sign of this.zodiacTraits){ 

             const [fromMonth, fromDay]  = sign.from.split('-').map(Number);
             const [toMonth,toDay]= sign.to.split('-').map(Number);

             if((month === fromMonth && day >= fromDay) || ( month === toMonth && day <= toDay)){

                console.log('Sign Received from if condition' + sign);

                return sign;
             }

            }

        }

        
           

}