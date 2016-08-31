import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('owner', params.owner_id);
  },
  actions: {
    saveListing(params) {
      var newListing = this.store.createRecord('listing', params);
      var owner = params.owner;
      owner.get('listings').addObject(newListing);
      newListing.save().then(function(){
        return owner.save();
      });
      // this.transitionTo('index');
    },
    updateOwner(params) {
      var owner = params.owner;
      Object.keys(params).forEach(function(key) {
        if (params[key]!==undefined) {
          owner.set(key, params[key]);
        }
      });
      owner.save();
    },
    destroyListing(listing) {
      var ratings_delete = listing.get('reviews').map(function(review) {
        return review.destroyRecord;
      });
      Ember.RSVP.all(ratings_delete).then(function(){
        return listing.destroyRecord();
      });
    },
    updateListing(params, listing) {
      Object.keys(params).forEach(function(key){
        if (params[key]!==undefined) {
          listing.set(key, params[key]);
        }
      });
      listing.save();
    }
  }
});
