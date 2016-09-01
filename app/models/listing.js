import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  rate: DS.attr(),
  zipcode: DS.attr(),
  streetAddress: DS.attr(),
  city: DS.attr(),
  state: DS.attr(),
  neighborhood: DS.attr(),
  guidelines: DS.attr(),
  camping: DS.attr(),
  gardening: DS.attr(),
  events: DS.attr(),

  water: DS.attr(),
  pets: DS.attr(),
  bathroom: DS.attr(),
  parking: DS.attr(),
  alcohol: DS.attr(),
  smoking: DS.attr(),
  wifi: DS.attr(),
  fires: DS.attr(),
  rvHookup: DS.attr(),
  electricity: DS.attr(),
  grill: DS.attr(),
  bookings: DS.hasMany('booking', {async: true}),
  reviews: DS.hasMany('review', {async: true}),
  owner: DS.belongsTo('owner', {async: true}),
  image1: DS.attr(),
  image2: DS.attr(),
  image3: DS.attr(),
  image4: DS.attr(),


  ratingAverage: Ember.computed('reviews.@each.rating', function(){
    var total = 0;
    (this.get('reviews')).forEach(function(review){
      total += review.get('rating');
    });
    return Math.round(total/this.get('reviews').get('length'));
  }),

  imageArray: Ember.computed('image1', 'image2', 'image3', 'image4', function(){
    var images = [];
    if (this.get('image1') !== "") {
      images.push(this.get('image1'));
    }
    if (this.get(('image2')) !== ""){
      images.push(this.get('image2'));
    }
    if (this.get('image3') !== ""){
      images.push(this.get('image3'));
    }
     if (this.get(('image4')) !== ""){
      images.push(this.get('image4'));
    }
    return images;
  })
});
