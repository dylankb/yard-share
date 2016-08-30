import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    renterLogin(params) {
      var username = params.username;
      var self = this;

      this.store.query('renter', {
        orderBy: 'username',
        equalTo: username}).then(function(returnedRenters) {
          if(returnedRenters.get('length') > 0) {
            var renter = returnedRenters.get('firstObject');
            self.transitionTo('renter', renter.id);
          } else {
            self.transitionTo('error');
          }
        });
    },
    ownerLogin(params) {
      var username = params.username;
      var self = this;

      this.store.query('owner', {
      orderBy: 'username',
      equalTo: username}).then(function(returnedOwners) {
        if(returnedOwners.get('length') > 0) {
          var owner = returnedOwners.get('firstObject');
          self.transitionTo('owner', owner.id);
          console.log("Success");
        } else {
          self.transitionTo('error');
        }
      });
    }
  }
});
