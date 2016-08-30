import Ember from 'ember';

export default Ember.Component.extend({
  updateRenterForm: false,
  actions: {
    updateRenterFormShow() {
      this.set('updateRenterForm', true);
    },
    updateRenter(renter) {
      var params = {
        description: this.get('description'),
        image: this.get('image'),
        renter: this.get('renter'),
      };
      this.set('updateRenterForm', false);
      this.sendAction('updateRenter', params);
    }
  }
});
