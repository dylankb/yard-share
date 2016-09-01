import Ember from 'ember';

export default Ember.Component.extend({
  showListingForm: false,
  neighborhoods: ["Downtown", "Pearl District", "Old Chinatown", "NW Portland/Nob Hill", "Lloyd District", "Mississippi/Williams", "Alberta Arts District", "Division/Clinton", "Belmont", "Hawthorne", "Sellwood-Moreland"],

  actions: {
    showListingForm() {
      this.set('showListingForm', true);
    },
    hideListingForm() {
      this.set('showListingForm', false);
    },
    addAmmenity(){
      this.set(event.target.id, event.target.checked);
    },
    addUsage(){
      this.set(event.target.id, event.target.checked);
    },
    deleteListing(listing){
      if(confirm('Are you sure you want to permanently delete this listing?')){
        this.sendAction('destroyListing', listing);
      }
    },
    updateListing(listing) {
      var params = {
        title: this.get('title'),
        description: this.get('description'),
        rate: this.get('rate'),
        image1: this.get('image1') ? this.get('image1'): "",
        image2: this.get('image2') ? this.get('image2'): "",
        image3: this.get('image3') ? this.get('image3'): "",
        image4: this.get('image4') ? this.get('image4'): "",
        zipcode: this.get('zipcode'),
        streetAddress: this.get('streetAddress'),
        city: this.get('city'),
        state: this.get('state'),
        neighborhood: this.get('neighborhood'),
        guidelines: this.get('guidelines'),
        camping: this.get('camping'),
        gardening: this.get('gardening'),
        events: this.get('events'),

        water: this.get('water'),
        pets: this.get('pets'),
        bathroom: this.get('bathroom'),
        parking: this.get('parking'),
        alcohol: this.get('alcohol'),
        smoking: this.get('smoking'),
        wifi: this.get('wifi'),
        fires: this.get('fires'),
        rvHookup: this.get('rvHookup'),
        electricity: this.get('electricity'),
        grill: this.get('grill'),
        owner: this.get('owner')
      };
      this.set('showListingForm', false);
      this.sendAction('updateListing', params, listing);
    }
  }
});
