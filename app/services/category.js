import Ember from 'ember';

/**
 * Category service. Stores user category selection cross components.
 *
 * @class Service.Category
 * @constructor
 * @extends Ember.Service
 */
export default Ember.Service.extend({
  /**
   * Boolean determines if the user is at the limited category capacity.
   * Evaluated when a user adds or deletes a category from their list.
   *
   * @property atCapacity
   * @type {Boolean}
   * @default false
   */
  atCapacity: false,
  /**
   * Array of category selections. Limited to 5.
   *
   * @property selectedCategories
   * @type {Array.Object}
   * @default []
   */
  selectedCategories: [],

  // Category service actions
  actions: {
    /**
     * Removes a category based on the index the user selected from their
     * `selectedCategories`.
     *
     * @method removeCategory
     * @param categoryIndex The index of the category object set in the
     *                      selectedCategories array.
     */
    removeCategory(categoryIndex) {
      let selectedCategories = this.get('selectedCategories');

      this.set('selectedCategories', selectCategories.slice(categoryIndex, 1));
      this.set('atCapacity', false);
    },
    /**
     * Adds the category object to the selectedCategories array when selected by
     * the user.
     *
     * @method selectCategory
     * @param category The category object selected by the user
     */
    selectCategory(category) {
      let selectedCategories = this.get('selectedCategories');

      if ( selectedCategories.length <= 5 ) {
        this.set('selectedCategories', selectedCategories.push(category));
        if (selectedCategories.length === 5) { this.set('atCapacity', true); }
      } else {
        this.set('atCapacity', true);
      }
    }
  }
});
