import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createAccount(params) {
      if (params.userType === "renter") {
        var newRenter = this.store.createRecord('renter', params);
        newRenter.save();
      } else if (params.userType === "owner") {
        var newOwner = this.store.createRecord('owner', params);
        newOwner.save();
      }
      this.transitionTo('index');
    }
  }
});
