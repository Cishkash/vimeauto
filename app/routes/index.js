import Ember from 'ember';

/**
 * The index route. The landing route to the application.
 *
 * @class Route.Index
 * @constructor
 * @extends Ember.Route
 */
export default Ember.Route.extend({
  /**
   * application/index model. Provides a hash of categories and trending videos.
   *
   * @event
   * @return {Array.Object}
   */
  model() {
    return Ember.RSVP.hash({
      categories: this.store.findAll('category'),
      trendings: this.store.findAll('trending')
    });
  }
});
