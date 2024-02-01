import { LightningElement,track,api } from 'lwc';

export default class GenieRelatedListsPromotions extends LightningElement {
    @api status = 'After';

    @track items = [
        {
            label: 'Orders', number: '4', icon: 'standard:campaign',
            headers: [
                'Order Name', 'Order Date', 'Order Status'
            ],
            rows: [
                ['Order 001', '15-06-2023', 'Ordered'],
                ['Order 002', '15-11-2023', 'Cancelled'],
                ['Order 003', '01-02-2024', 'Ordered'],
                ['Order 004', '01-03-2024', 'Cancelled']
            ]
        },
        {
            label: 'Marketing Interactions', number: '5', icon: 'standard:read_receipts',
            headers: [
                'Interaction Date', 'Related Campaign', 'Type', 'Retail Store'
            ],
            rows: [
                ['03-02-2024', 'Vegan Vol-Au-Vent Introduction', 'Email', 'Delhaize Leuven'],
                ['02-02-2024', 'Vegan Vol-Au-Vent Introduction', 'Email', 'Delhaize Gent'],
                ['16-11-2023', 'Halloween Specials', 'Portal', 'Delhaize Boechout'],
                ['16-07-2023', 'Frescoline Introduction Campaign', 'Web', 'Delhaize Lier'],
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