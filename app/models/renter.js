import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  password: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),
  bookings: DS.hasMany('booking', {async: true}),
  reviews: DS.hasMany('review', {async: true})
});
