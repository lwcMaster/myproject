import { LightningElement } from 'lwc';
import saveRegistration from '@salesforce/apex/UserRegistrationController.saveRegistration';
import getRegistrationByName from '@salesforce/apex/UserRegistrationController.getRegistrationByName';

export default class UserForm extends LightningElement {

    name ='';
    gender = '';
    Selectedcity = '';
    qualifications = [];
    showMessage = false;

    genderOptions = [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' }
    ];

    cityOptions = [
        { label: 'New York', value: 'New York' },
        { label: 'London', value: 'London' },
        { label: 'Mumbai', value: 'Mumbai' }
    ];

    qualificationOptions = [
        { label: 'BSc', value: 'BSc' },
        { label: 'MSc', value: 'MSc' },
        { label: 'PhD', value: 'PhD' }
    ];


    handleNameChange(event) {
        this.name = event.target.value;
    }
    handleCityChange(event) {
        this.Selectedcity = event.detail.value;

    }

    handleQualificationChange(event) {
        this.qualifications = event.detail.value;
    }

    handleGenderChange(event) {
        this.gender = event.detail.value;
    }

   

    handleSubmit() {
        if (this.gender !== '' && this.Selectedcity !== '' && this.qualifications.length > 0) {
            saveRegistration({
                city: this.Selectedcity,
                gender: this.gender,
                qualifications: this.qualifications,
            })
                .then(() => {
                    alert('Saved successfully');
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Failed to save record');
                });
        } else {
            alert('Please fill all the fields');
            this.showMessage = false;
        }
    }

    handleSearch() {
        console.log('Searching for registration:', this.name); // 👈 log input
        getRegistrationByName({ name: this.name })
            .then(result => {
                console.log('Result:', result); // 👈 log result
                if (result) {
                    this.gender = result.Gender__c;
                    this.Selectedcity = result.City__c;
                    this.qualifications = result.Qualifications__c
                        ? result.Qualifications__c.split(', ')
                        : [];
                } else {
                    alert('No record found for the provided Registration Number');
                }
            })
            .catch(error => {
                console.error('Error fetching record:', error); // 👈 log error
                alert('Error during search');
            });
    }

    clearform(){

           this.name ='';
             this.gender = '';
             this.Selectedcity = '';
             this.qualifications = []; 
    }
    
}