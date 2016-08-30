import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('owner', params.owner_id);
  }
});
