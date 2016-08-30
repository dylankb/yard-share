import Ember from 'ember';

export default Ember.Component.extend({
  addNewBooking: false,
  actions: {
    saveBooking() {
      var params = {
        use: this.get('use'),
        details: this.get('details'),
        when: this.get('when'),
        booker: this.get('booker'),
        listing: this.get('listing')
      };
      this.sendAction('saveBooking', params);
      this.set('addNewBooking', false);
    },
    revealAddNewBooking() {
      this.set('addNewBooking', true);
    }
  }
});
