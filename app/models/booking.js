import DS from 'ember-data';

export default DS.Model.extend({
  use: DS.attr(),
  details: DS.attr(),
  when: DS.attr(),
  renter: DS.belongsTo('renter', {async: true}),
  listing: DS.belongsTo('listing', {async: true})
});
