import Ember from 'ember';

export default Ember.Component.extend({
  showGardening: false,
  showCamping: false,
  showEvents: false,
  showNeighborhood: false,
  listingsByUse: Ember.computed('listings', 'showGardening', 'showCamping', 'showEvents', 'showNeighborhood', function() {
    var self = this;

    // var findNeighborhood = function() {
    //   if (self.get('showNeighborhood') === false) {
    //     return true;
    // } else {
    //   return listing.get('neighborhood') === self.get('showNeighborhood');
    // }

    return this.get('listings').filter(function(listing) {
      if (listing.get('gardening') === true && self.get('showGardening') === true) {

        // findNeighborhood();

        if (self.get('showNeighborhood') === false) {
          return true;
        } else {
          return listing.get('neighborhood') === self.get('showNeighborhood');
        }
      }
      else if (listing.get('camping') === true && self.get('showCamping') === true) {
        if (self.get('showNeighborhood') === false) {
          return true;
        } else {
          return listing.get('neighborhood') === self.get('showNeighborhood');
        }
      }
      else if (listing.get('events') === true && self.get('showEvents') === true) {
        if (self.get('showNeighborhood') === false) {
          return true;
        } else {
          return listing.get('neighborhood') === self.get('showNeighborhood');
        }
      }
    });
  }),

  actions: {
    gardeningUse() {
      this.set(event.target.id, event.target.checked);
      this.set('showGardening', event.target.checked);
    },
    campingUse() {
      this.set(event.target.id, event.target.checked);
      this.set('showCamping', event.target.checked);
    },
    eventsUse() {
      this.set(event.target.id, event.target.checked);
      this.set('showEvents', event.target.checked);
    },
    chooseNeighborhood() {
      this.set(event.target.id, event.target.checked);
      // debugger;
      if (event.target.checked === true){
        this.set('showNeighborhood', event.target.id);
        console.log("true", this.get('showNeighborhood'));
      } else if (event.target.checked === false){
        this.set('showNeighborhood', false);
        console.log("false", this.get('showNeighborhood'));
      }
    }
  }
});
