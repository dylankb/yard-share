import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('owner', params.owner_id);
  },
  actions: {
    updateOwner(params) {
      var owner = params.owner;
      Object.keys(params).forEach(function(key) {
        if (params[key]!==undefined) {
          owner.set(key, params[key]);
        }
      });
      owner.save();
    }
  }
});
