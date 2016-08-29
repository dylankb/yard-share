import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('listing');
  this.route('account');
  this.route('renter', {path: '/renter/:renter_id'});
  this.route('owner');
  this.route('log-in');
  this.route('error');
});

export default Router;
