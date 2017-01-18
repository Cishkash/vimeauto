import Ember from 'ember';
const {inject} = Ember;

/**
 * Navigation bar component.
 *
 * @class Component.NavigationBar
 * @constructor
 * @extends Ember.Component
 */
export default Ember.Component.extend({
  // Service injections
  categoryService: inject.service('category'),

  actions: {
    /**
     * Transitions to a random video in the category list of the user selected
     * category.
     * @TODO: Remove the possibility of getting the same video twice.
     *
     * @method transitionRandomVideo
     * @returns {undefined}
     */
    transitionRandomVideo(videos) {
      let r = Math.floor(Math.random() * 10);

      this.set('categoryService.nowPlaying', videos[r]);

      Ember.getOwner(this).lookup('router:main').transitionTo('videos', videos[r].key);
    },
    /**
     * Transitions to the video route of the provided ID.
     *
     * @method transitionToVideo
     * @returns {undefined}
     */
    transitionToVideo(video) {
      Ember.getOwner(this).lookup('router:main').transitionTo('videos', video);
    }
  }
});
