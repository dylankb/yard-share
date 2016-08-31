import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      listing: this.store.findRecord('listing', params.listing_id),
      renters: this.store.findAll('renter')
    });
  },
  actions: {
    saveReview(params) {
      var renters = this.modelFor('listing-detail').renters;
      for(var renter of renters.toArray()) {
        if(renter.get('username') === params.reviewer) {
          params.reviewer_id = renter.id;
        }
      }
      var newReview = this.store.createRecord('review', params);
      var listing = params.listing;
      listing.get('reviews').addObject(newReview);
      newReview.save().then(function(){
        return listing.save();
      });
    },
    saveBooking(params) {
      var booker = params.booker;
      var listing = params.listing;
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
              listing.save();
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
