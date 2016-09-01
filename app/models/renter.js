import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  username: DS.attr(),
  password: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),
  bookings: DS.hasMany('booking', {async: true}),
  reviews: DS.hasMany('review', {async: true}),

  ratingAverage: Ember.computed('reviews.@each.rating', function(){
    var total = 0;
    (this.get('reviews')).forEach(function(review){
      total += review.get('rating');
    });
    return Math.round(total/this.get('reviews').get('length'));
  })
});
