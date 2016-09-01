import DS from 'ember-data';

export default DS.Model.extend({
  reviewer_id: DS.attr(),
  reviewer: DS.attr(),
  rating: DS.attr('number'),
  text: DS.attr(),
  timestamp: new Date(),
  renter: DS.belongsTo('renter', {async: true}),
  listing: DS.belongsTo('listing', {async: true}),

});
