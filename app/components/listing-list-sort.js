import Ember from 'ember';

export default Ember.Component.extend({
  showGardening: false,
  showCamping: false,
  showEvents: false,
  listingsByUse: Ember.computed('listings', 'showGardening', 'showCamping', 'showEvents', function() {
    var self = this;
    return this.get('listings').filter(function(listing) {
      if (listing.get('gardening') === true && self.get('showGardening') === true) {
        return true;
      }
      else if (listing.get('camping') === true && self.get('showCamping') === true) {
        return true;
      }
      else if (listing.get('events') === true && self.get('showEvents') === true) {
        return true;
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
    }
  }
});
