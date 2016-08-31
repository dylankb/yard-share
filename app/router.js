import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('listings');
  this.route('account');
  this.route('owner', {path: '/owner/:owner_id'});
  this.route('listing-detail', {path: '/listing-detail/:listing_id'});
  this.route('renter', {path: '/renter/:renter_id'});
  this.route('log-in');
  this.route('error');
  this.route('renters');
});

export default Router;
