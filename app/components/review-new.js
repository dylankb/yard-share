import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    addNewReview() {
      this.set('addNewReview', true);
    },
    saveReview() {
      var params = {
        username: this.get('username'),
        rating: this.get('rating'),
        text: this.get('text'),
        timestamp: Date.now(),
        renter: this.get('renter') || "",
        listing: this.get('listing') || ""
      };
      this.sendAction('saveReview', params);
      this.set('addNewReview', false);
      this.set('username', "");
      this.set('rating', "");
      this.set('text', "");
    }
  }
});
