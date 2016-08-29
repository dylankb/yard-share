import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('listings');
  this.route('account');
  this.route('renter');
  this.route('owner');
  this.route('listing-detail', {path: '/listing-detail/:listing_id'});
});

export default Router;
