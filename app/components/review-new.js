import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  ratings: [1, 2, 3, 4, 5],
  actions: {
    addNewReview() {
      this.set('addNewReview', true);
    },
    dontAddNewReview() {
      this.set('addNewReview', false);
    },
    saveReview() {
      var params = {
        reviewer: this.get('username'),
        rating: parseInt(this.get('rating')),
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
