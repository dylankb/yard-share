import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('listing', params.listing_id);
  },
  actions: {
    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      var listing = params.listing;
      listing.get('reviews').addObject(newReview);
      newReview.save().then(function(){
        return listing.save();
      });
      this.transitionTo('listing', params.listing);
    },
    saveBooking(params) {
      var booker = params.booker;
      var self = this;

      this.store.query('renter', {
        orderBy: 'username',
        equalTo: booker}).then(function(returnedBookers) {
          if (returnedBookers.get('length') > 0) {
            var renter = returnedBookers.get('firstObject');
            self.set(params.booker, renter);
            var newBooking = self.store.createRecord('booking', params);
            renter.get('bookings').addObject(newBooking);
            newBooking.save().then(function() {
              renter.save();
              self.transitionTo('renter', renter.id);
            });
          } else {
            self.transitionTo('error');
          }
        });
    }
  }
});
