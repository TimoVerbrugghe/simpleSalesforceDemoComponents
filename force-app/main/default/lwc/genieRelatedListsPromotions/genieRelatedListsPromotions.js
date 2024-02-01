import { LightningElement,track,api } from 'lwc';

export default class GenieRelatedListsPromotions extends LightningElement {
    @api status = 'After';

    @track items = [
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
            label: 'Promotion Line Items', number: '5', icon: 'standard:product',
            headers: [
                'Promotion Line Item Name', 'Related Promotion', 'Discount', 'Status'
            ],
            rows: [
                ['Zalo', 'Holiday Special Discount', '30 NOK', 'Active'],
                ['OMO', 'Spring 2024 Promotion', '20 NOK', 'Inactive'],
                ['Blenda', 'Summer Clearance Sale', '15 NOK', 'Active'],
                ['Jif', 'Year-End Mega Deal', '25 NOK', 'Inactive'],
                ['Define', 'Year-End Mega Deal', '18 NOK', 'Active']
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