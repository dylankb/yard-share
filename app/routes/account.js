import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createAccount(params) {
      if (params.userType === "renter") {
        console.log(params.userType);
        var newRenter = this.store.createRecord('renter', params);
        newRenter.save();
      } else if (params.userType === "owner") {
        console.log(params.userType);
        var newOwner = this.store.createRecord('owner', params);
        console.log(newOwner, "this is an owner");
        newOwner.save();
      }
      this.transitionTo('index');
    }
  }
});
