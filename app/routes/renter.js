import Ember from 'ember';


export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      renter: this.store.findRecord('renter', params.renter_id),
      owners: this.store.findAll('owner')
    });
  },

  actions: {
    updateRenter(params) {
      var renter = params.renter;
      Object.keys(params).forEach(function(key) {
        if (params[key]!==undefined) {
          renter.set(key, params[key]);
        }
      });
      renter.save();
    },
    saveReview(params) {
      var owners = this.modelFor('renter').owners;
      for(var owner of owners.toArray()) {
        if(owner.get('username') === params.reviewer) {
          params.reviewer_id = owner.id;
        }
      }
      var newReview = this.store.createRecord('review', params);
      var renter = params.renter;
      renter.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return renter.save();
      });
    }
  }
});
