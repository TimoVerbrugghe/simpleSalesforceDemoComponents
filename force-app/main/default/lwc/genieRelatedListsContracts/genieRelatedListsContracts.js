import { LightningElement,track,api } from 'lwc';

export default class GenieRelatedLists extends LightningElement {
    @api status = 'After';

    @track items = [
        {
            "label": "Contracts",
            "number": "3",
            "icon": "standard:assignment",
            "headers": [
                "Contract Title",
                "Start Date",
                "Value",
                "Status"
            ],
            "rows": [
                ["2021 Contract", "2021-12-05", "NOK 20.000", "Completed"],
                ["2022 Contract", "2022-12-12", "NOK 30.000", "Completed"],
                ["2023 Contract", "2023-12-19", "NOK 50.000", "Active"],
                ["2024 Contract", "2024-12-19", "NOK 50.000", "Draft"]
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