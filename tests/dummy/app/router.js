import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('demo-basic');
  this.route('demo-basic-plus');
  this.route('demo-backend');
  this.route('demo-local-data');
});

export default Router;
