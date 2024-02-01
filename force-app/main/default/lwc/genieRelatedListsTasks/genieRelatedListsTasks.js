import { LightningElement,track,api } from 'lwc';

export default class GenieRelatedListsTasks extends LightningElement {
    @api status = 'After';

    @track items = [
        {
            label: 'Tasks', number: '5', icon: 'standard:task',
            headers: [
                'Task Name', 'Due Date', 'Status'
            ],
            rows: [
                ['Follow-up on Sales Agreement', '2023-12-15', 'In Progress'],
                ['Prepare for Contract Negotiation', '2023-12-20', 'Not Started'],
                ['Review Shipment Issues', '2023-12-10', 'Completed'],
                ['Update Meeting Content', '2023-12-18', 'Not Started'],
                ['Promotion 2024 Planning', '2023-12-22', 'In Progress']
            ]
        },
        {
            label: 'Meetings', number: '2', icon: 'standard:event',
            headers: [
                'Meeting Name', 'Start Date', 'Status'
            ],
            rows: [
                ['Account Review Meeting', '2023-12-08', 'Completed'],
                ['Sales Strategy Discussion', '2023-12-14', 'Scheduled']
            ]
        }
      ];

      connectedCallback() {
        if (this.status == "Before") {
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i].label != 'Opportunities' && this.items[i].label != 'Cases') {
                    //this.items[i].headers = null;
                    //this.items[i].rows = null;
                    //this.items[i].number = 0;

                    this.items.splice(i, 1);
                    i--;
                }
            }
        }
      }
}