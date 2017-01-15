import Ember from 'ember';

/**
 * Videos route
 *
 * @class Route.Videos
 * @constructor
 * @extends Ember.Route
 */
export default Ember.Route.extend({
  /**
   * Fetches the video model for the provided video id.
   *
   * @event model
   * @return {Promise}
   */
  model(params) {
    return this.store.findRecord('video', params.video_id);
  },
  /**
   * After model hook that unloads the record from the store after the model is
   * initially loaded on to the controller. Needed because the store keeps
   * retaining the model of the previous dynamic route after revisiting a
   * route.
   *
   * @event afterModel
   * @return {undefined}
   */
  afterModel(model) {
    this.store.findRecord('video', model.id).then( video => {
      this.store.unloadRecord(video);
    });
  }
});
