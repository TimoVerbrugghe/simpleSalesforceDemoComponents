import { LightningElement, api, track } from 'lwc';
import { subscribe, onError } from 'lightning/empApi';

export default class GenieActivityFeed extends LightningElement {

  @api recordId;
  @track activities = [
    {label: 'Page Visit', action: 'Home Page', icon: 'standard:account', time: '10:00:54 am'},
    {label: 'Product View', action: 'Product: Laptop XYZ', icon: 'standard:product_item', time: '3 days ago'},
    {label: 'Add to Cart', action: 'Product: Laptop XYZ', icon: 'standard:cart', time: '3 days ago'},
    {label: 'Email Opened', action: 'Promotional Email: Exclusive Discounts', icon: 'standard:email', time: '1 week ago'},
    {label: 'Checkout Initiated', action: 'Shopping Cart', icon: 'standard:checkout', time: '1 week ago'},
    {label: 'Order Placed', action: 'Order #12345', icon: 'standard:orders', time: '2 weeks ago'},
    {label: 'Customer Support Chat', action: 'Chat: Inquired about Shipping', icon: 'standard:live_chat', time: '3 weeks ago'},
    {label: 'Customer Review', action: 'Product: Laptop XYZ', icon: 'standard:feedback', time: '1 month ago'},
  ];

  loadingClass = 'slds-hidden';

  channelName = "/event/DataCloudActivity__e";
  subscription = {};

  connectedCallback() {
    console.log('connectedCallback');
    this.registerErrorListener();
    this.handleSubscribe();
  }

  handleSubscribe() {
    console.log('handleSubscribe');
    const messageCallback = (response) => {
      console.log('handleSubscribe: ' + response);
      this.loadingClass = 'slds-icon-eq slds-is-animated slds-visible';

      const payload = response.data.payload;
      let activity = {
          label: payload.Label__c,
          action: payload.Action__c,
          icon: payload.Icon__c,
          time: payload.Time__c
      }
  
      setTimeout(() => {
        console.log(JSON.stringify(activity));
        this.activities.unshift(activity);
        console.log(JSON.stringify(this.activities));
        this.loadingClass = 'slds-hidden';
      }, 2500);
    };

    subscribe(this.channelName, -1, messageCallback).then(
      (response) => {
        this.subscription = response;
      }
    );
  }

    //handle Error
    registerErrorListener() {
        onError(error => {
            console.log('Received error from server: ', JSON.stringify(error));
        });
    }

    get getLoadingClass() {
      return this.loadingClass;
    }
}