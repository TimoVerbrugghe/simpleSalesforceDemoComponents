import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { createRecord } from 'lightning/uiRecordApi';

export default class YourComponentName extends LightningElement {
    handleClick(event) {
        const label = event.target.label;

        if (label === 'Timo') {
            // Create a new Contact record
            const fields = {
                FirstName: 'Timo',
                LastName: 'Verbrugghe'
            };

            const recordInput = { apiName: 'Contact', fields };

            createRecord(recordInput)
                .then(result => {
                    // Record is created successfully
                    console.log('Contact created with Id: ' + result.id);

                    // Display success toast
                    const toastEvent = new ShowToastEvent({
                        title: 'Contact Created',
                        message: 'Contact Timo Verbrugghe created successfully',
                        variant: 'success',
                    });
                    this.dispatchEvent(toastEvent);
                })
                .catch(error => {
                    // Handle error and display an error toast
                    console.error('Error creating contact:', error.body.message);
                    const toastEvent = new ShowToastEvent({
                        title: 'Error',
                        message: 'Error creating contact: ' + error.body.message,
                        variant: 'error',
                    });
                    this.dispatchEvent(toastEvent);
                });
        }
    }
}
