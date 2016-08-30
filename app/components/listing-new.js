import Ember from 'ember';

export default Ember.Component.extend({
  showListingForm: false,

  water: false,
  pets: false,
  bathroom: false,
  parking: false,
  alcohol: false,
  smoking: false,
  wifi: false,
  fires: false,
  rvHookup: false,
  electricity: false,
  grill: false,
  camping: false,
  gardening: false,
  events: false,

  actions: {
    showListingForm() {
      this.set("showListingForm", true);
    },
    addAmmenity(){
      this.set(event.target.id, event.target.checked);
    },
    addUsage(){
      this.set(event.target.id, event.target.checked);
    },
    saveListing() {
      var params = {
        title: this.get('title'),
        description: this.get('description'),
        rate: this.get('rate'),
        image: this.get('image'),
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
      this.set("showListingForm", false);
      this.sendAction('saveListing', params);
    }
  }
});
