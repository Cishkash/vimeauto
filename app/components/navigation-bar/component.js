import Ember from 'ember';
const { getOwner, inject } = Ember;

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

  /**
   * Takes our array of videos and randomizes them before storing them on the
   * category service.
   *
   * @method randomizeVideos
   * @private
   * @returns {Array.Object}
   */
  _randomizeVideos(flattenedVideosArr) {
    let flatRandomVideos = [],
        randomizedArr = [];

    for (let i = 0; i < flattenedVideosArr.length; ++i) {
      // Initialize with a random number
      let randNum = Math.floor(Math.random() * flattenedVideosArr.length);
      // If it matches a number, cycle till it produces a unique number
      while (randomizedArr.indexOf(randNum) !== -1) {
        randNum = Math.floor(Math.random() * flattenedVideosArr.length);
      }
      // Now we push the random (and unique) number
      randomizedArr.push(randNum);
    }

    // Finally, map the random array of numbers to the videos
    randomizedArr.map( (videoIndex, index) => {
      flatRandomVideos[index] = flattenedVideosArr[videoIndex];
    });

    return flatRandomVideos;
  },

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

      getOwner(this).lookup('router:main').transitionTo('videos', videos[r].key);
    },
    /**
     * Transitions to the video route of the provided ID.
     *
     * @method transitionToVideo
     * @returns {undefined}
     */
    transitionToVideo(video) {
      getOwner(this).lookup('router:main').transitionTo('videos', video);
    },
    /**
     * Transitions to the videos page with a modified playlist that is more
     * random from the user's selected categories. A comingled randomized
     * playlist if you will.
     *
     * @NOTE Should consider moving this to the category service modifying this
     *       data in two places seems a little structurally unsound.
     *
     * @method transitionToVimeauto
     * @return {undefined}
     */
    transitionToVimeauto() {
      const selectedCategories = this.get('categoryService.selectedCategories');
      let flattenedVideosArr = [];

      // Just a neat way to flatten an array that contains a set of arrays using
      // a map function. Consolidates the need to push a user's selected (up to 5)
      // categories into an array then calling reduce on that array to flatten
      // it to the structure I'm expecting.
      selectedCategories.forEach( (category) => {
        flattenedVideosArr = flattenedVideosArr.concat(category.videos.map( videoSet => videoSet ) );
      });

      // Separating the randomizeVideos function will allow me to isolate some
      // functionality here.
      flattenedVideosArr = this._randomizeVideos(flattenedVideosArr);

      this.get('categoryService').setProperties({
        flattenedVideosArr: flattenedVideosArr,
        isVimeauto: true
      });

      // Transition to the route of the first random video
      getOwner(this).lookup('router:main').transitionTo('videos', flattenedVideosArr[0].key);
    }
  }
});
