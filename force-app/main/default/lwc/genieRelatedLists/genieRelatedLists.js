import { LightningElement,track,api } from 'lwc';

export default class GenieRelatedLists extends LightningElement {
    @api status = 'After';

    @track items = [
        {
            label: 'Calls', number: '3', icon: 'standard:call',
            headers: [
                'Call Subject', 'Start Time', 'Duration', 'Status'
            ],
            rows: [
                ['Follow-up on Shipment Issues', '2023-12-05 10:30 AM', '20 mins', 'Completed'],
                ['Opportunity Qualification Call', '2023-12-12 02:00 PM', '30 mins', 'Scheduled'],
                ['Shipment Issue Call', '2023-12-19 11:45 AM', '15 mins', 'Not Started']
            ]
        },
        {
            label: 'Promotions', number: '4', icon: 'standard:discounts',
            headers: [
                'Promotion Name', 'Sell-In Start Date', 'Sell-Out Start Date', 'Sell-In End Date', 'Sell-Out End Date', 'Status'
            ],
            rows: [
                ['Holiday Special Discount', '2023-12-15', '2023-12-20', '2023-12-21', '2023-12-31', 'Completed'],
                ['Spring 2024 Promotion', '2023-12-15', '2023-12-20', '2023-12-21', '2023-12-31', 'Planned'],
                ['Summer Clearance Sale', '2023-11-25', '2023-12-01', '2023-12-02', '2023-12-10', 'Ordered'],
                ['Year-End Mega Deal', '2023-12-01', '2023-12-10', '2023-12-11', '2023-12-31', 'Planned']
            ]
        },
        {
            label: 'Shipments', number: '3+', icon: 'custom:custom98',
            headers: [
                'Shipping ID', 'Carrier', 'Type', 'Status'
            ],
            rows: [
                ['S-0081235', 'USPS', 'Standard Shipping', 'Delivered'],
                ['S-0028272', 'FexEx', 'Overnight Shipping', 'Delivered'],
                ['S-0019301', 'UPS', '2-day Shipping', 'Delivered']

            ]
        },
        {
            label: 'Cases', number: '2', icon: 'standard:case',
            headers: [
                'Case', 'Subject', 'Status'
            ],
            rows: [
                ['00001106', 'Product Specification Question', 'Closed'],
                ['00001116', 'Shipment problems', 'Closed']
            ]        
        },
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