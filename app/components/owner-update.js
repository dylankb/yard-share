import Ember from 'ember';

export default Ember.Component.extend({
  updateOwnerForm: false,
  actions: {
    updateOwnerFormShow() {
      this.set('updateOwnerForm', true);
    },
    updateOwner(owner) {
      var params = {
        description: this.get('ownerDescription'),
        image: this.get('ownerImage'),
        owner: this.get('owner'),
      };
      this.set('updateOwnerForm', false);
      this.sendAction('updateOwner', params);
    }
  }
});
