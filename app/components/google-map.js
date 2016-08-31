import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  actions: {
    showMap(listing) {
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(listing.get('latitude'), listing.get('longitude')),
        zoom: 15
      };
      var newMap = this.get('map').findMap(container, options);
      var markerOptions = {
        position: {lat: listing.get('latitude'), lng: listing.get('longitude')},
        map: newMap,
        icon: '/images/leaf_icon.png'
      };
      var content = {
        content: "<h4>" + listing.get('title') + "</h4>"
      };
      var infowindow = this.get('map').createInfoWindow(content);
      var marker = this.get('map').createMarker(markerOptions);
      marker.addListener('click', function() {
        infowindow.open(newMap, marker);
      });
    }
  }
});
