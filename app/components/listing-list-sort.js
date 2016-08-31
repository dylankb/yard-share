import Ember from 'ember';

export default Ember.Component.extend({
  neighborhoods: ["All", "Downtown", "Pearl District", "Old Chinatown", "NW Portland/Nob Hill", "Lloyd District", "Mississippi/Williams", "Alberta Arts District", "Division/Clinton", "Belmont", "Hawthorne", "Sellwood-Moreland"],
  showGardening: true,
  showCamping: true,
  showEvents: true,
  showNeighborhood: "All",
  listingsByUse: Ember.computed('listings', 'showGardening', 'showCamping', 'showEvents', 'showNeighborhood', function() {
    var self = this;

    var findNeighborhood = function(listing) {
      if (self.get('showNeighborhood') === "All") {
        return true;
      } else {
        return listing.get('neighborhood') === self.get('showNeighborhood');
      }
    };

    return this.get('listings').filter(function(listing) {
      if (listing.get('gardening') === true && self.get('showGardening') === true) {
        return findNeighborhood(listing);
      }
      else if (listing.get('camping') === true && self.get('showCamping') === true) {
        return findNeighborhood(listing);
      }
      else if (listing.get('events') === true && self.get('showEvents') === true) {
        return findNeighborhood(listing);
      } else if (self.get('showNeighborhood') === "All") {
        return listing.get('neighborhood') === self.get('showNeighborhood');
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
