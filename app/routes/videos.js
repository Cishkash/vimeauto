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
   * Model fetch for the route.
   * Should resolve issues where we attempt to transition to a route that the
   * user is already on.
   *
   * @event model
   * @return {Promise}
   */
  model(params) {
    // Just a quick check to make sure the model is not already in the store.
    // This situation _should_ never happen cause the record gets unloaded
    // immediately, but this is development so I'm noting this as a possible
    // fault in my code and I need to circle back to this.
    if (!this.store.recordIsLoaded('video', params.video_id)) {
      return this.store.findRecord('video', params.video_id);
    }
    return;
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
    const video = this.store.peekRecord('video', model.id);
    this.store.unloadRecord(video);
  }
});
