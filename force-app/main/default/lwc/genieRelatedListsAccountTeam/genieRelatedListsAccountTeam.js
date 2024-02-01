import { LightningElement,track,api } from 'lwc';

export default class GenieRelatedLists extends LightningElement {
    @api status = 'After';

    @track items = [
        {
            label: 'Account Team', number: '3', icon: 'standard:account',
            headers: [
                'Team Member', 'Role'
            ],
            rows: [
                ["Linn-Andrea Myhre", "KAM"],
                ["Joakim Villa Aarseth", "Business Manager"],
                ["Manveer Singh Sidhu", "Customer Director"]
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