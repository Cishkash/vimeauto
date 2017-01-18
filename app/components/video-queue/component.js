import Ember from 'ember';
const { inject } = Ember;

/**
 * The queue component for displaying the now playing and other videos related
 * to the queue.
 *
 * @class Component.VideoQueue
 * @constructor
 * @extends Ember.Component
 */
export default Ember.Component.extend({
  /**
   * Category service injection
   */
  categoryService: inject.service('category')
});
