import Ember from 'ember';

export default Ember.Component.extend({
  addNewBooking: false,
  useArray: [],
  usesArray: Ember.computed('listing.camping', 'listing.gardening', 'listing.events', 'useArray', function(){
    if (this.get('listing.camping')) {
      this.get('useArray').push('camping');
    }
    if (this.get('listing.gardening')) {
      this.get('useArray').push('gardening');
    }
    if (this.get('listing.events')) {
      this.get('useArray').push('events');
    }
    return this.get('useArray');
  }),
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
