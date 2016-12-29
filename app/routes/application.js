import Ember from 'ember';

/**
 * Application route. Fetches the `/categories` data when entering the app.
 *
 * @class Route.Application
 * @constructor
 * @extends Ember.Route
 */
export default Ember.Route.extend({
  model() {
    return this.store.findAll('category');
  }
});
