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
    }
  }
});
