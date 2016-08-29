import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  rating: DS.attr(),
  text: DS.attr(),
  timestamp: new Date(),
  renter: DS.belongsTo('renter', {async: true}),
  listing: DS.belongsTo('listing', {async: true})
});
