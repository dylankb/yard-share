import Ember from 'ember';

export default Ember.Component.extend({
  camping: false,
  actions: {
    addAmmenity(){
      this.set(event.target.id, event.target.checked);
    },
    saveListing() {
      var params = {
        water: this.get('water'),
        pets: this.get('pets'),
        bathroom: this.get('bathroom'),
        parking: this.get('parking'),
        alcohol: this.get('alcohol'),
        smoking: this.get('smoking'),
        wifi: this.get('wifi'),
        fires: this.get('fires'),
        rvHookup: this.get('rvHookup'),
        electricity: this.get('electricity'),
        grill: this.get('grill')
      };
debugger;
    }
  }
});
