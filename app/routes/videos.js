import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    this.store.findRecord('video', params.video_id);
  }
});
