import Ember from 'ember';
import MapUtil from '../utils/google-maps';

export default Ember.Service.extend({
  // googleMaps: window.google.maps,
  // findMap(container, options) {
  //   return new this.googleMaps.Map(container, options);
  // },
  // center(latitude, longitude) {
  //   return new this.googleMaps.LatLng(latitude, longitude);
  // },
  // createMarker(markerOptions) {
  //   return new this.googleMaps.Marker(markerOptions);
  // },
  // createInfoWindow(content) {
  //   return new this.googleMaps.InfoWindow(content);
  // },
  //
  //
  //
  //
  // init() {
  //   this.set('mapUtil', MapUtil.create());
  // }

  init() {
    if (!this.get('cachedMaps')) {
      this.set('cachedMaps', Ember.Object.create());
    }
    if (!this.get('mapUtil')) {
      this.set('mapUtil', MapUtil.create());
    }
  },

  getMapElement(location) {
    let camelizedLocation = location.camelize();
    let element = this.get(`cachedMaps.${camelizedLocation}`);
    if (!element) {
      element = this.createMapElement();
      this.get('mapUtil').createMap(element, location);
      this.set(`cachedMaps.${camelizedLocation}`, element);
    }
    return element;
  },

  createMapElement() {
    let element = document.createElement('div');
    element.className = 'map';
    return element;
  }

});
