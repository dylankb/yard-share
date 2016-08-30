import Ember from 'ember';


export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('renter', params.renter_id);
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
    }
  }
});
