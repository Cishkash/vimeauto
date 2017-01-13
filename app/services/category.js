import Ember from 'ember';
const { inject } = Ember;

/**
 * Category service. Stores user category selection cross components.
 *
 * @class Service.Category
 * @constructor
 * @extends Ember.Service
 */
export default Ember.Service.extend({

  /**
   * Extended ajax service from the ember-ajax addon. It's basically an adapter
   * for components.
   *
   * @property ajax
   * @type {Class.Object}
   */
  ajax: inject.service(),
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


  // Methods
  // ---------------------------------------------------------------------------

  /**
   * Attempt #2 at creating a random color. Still has the same faults but at the
   * value ranges 125-255 this does appear to return brighter colors with less
   * code.
   *
   * @method _assignAnotherColor
   * @private
   * @returns {String}
   */
  _assignAnotherColor() {
    let colorArray = [];

    for (let i = 0; i < 3; ++i) {
      colorArray.push(Math.floor(Math.random() * (255-125)) + 125);
    }

    return Ember.String.htmlSafe(`background-color: rgb(${colorArray.join()})`);
  },
  /**
   * Returns a randomly assigned color with an entirely overthought method.
   *
   * @method _assignColor
   * @private
   * @returns {String}
   */
  _assignColor() {
    const toHex = (toHex) => {
      // Converts it to hex
      let hex = toHex.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };

    let colorArray = [],
        colorString;

    // Get 3 random numbers between 75 and 255
    for (let i = 0; i < 3; ++i) {
      colorArray.push(Math.floor(Math.random() * (255-75) + 75));
    }

    // Cycle through those values to get a hex value
    colorArray.forEach( (hex, index) => {
      colorArray[index] = toHex(hex);
    });

    // Create a string from the hex values
    colorString = `background-color:#${colorArray.join('')}`;
    return Ember.String.htmlSafe(colorString);
  },
  /**
  * Adds the category object to the selectedCategories array when selected by
  * the user.
  *
  * @method selectCategory
  * @param category The category object selected by the user
  */
  addCategory(categoryName, categoryUri, categoryKey) {
    let category = {},
        selectedCategories = this.get('selectedCategories');

    this.set('error', false);

    // If they still have room and they're not trying to add something twice,
    // add the object to the array.
    if ( selectedCategories.length <= 4 &&
         !selectedCategories.find(selectedCategory => selectedCategory.name === categoryName) ) {

      Ember.set(category, 'assignedColor', this._assignAnotherColor());
      Ember.set(category, 'key', categoryKey);
      Ember.set(category, 'name', categoryName);
      Ember.set(category, 'uri', categoryUri);
      this.fetchCategoryVideos(categoryKey).then(videos => {
        Ember.set(category, 'videos', videos)
      });

      selectedCategories.push(category);
      this.set('selectedCategories', selectedCategories);
      this.notifyPropertyChange('selectedCategories');

      if (selectedCategories.length === 4) {
        this.set('atCapacity', true);
      }

    } else {
      // Capacity check, if not, they tried to add the same category twice.
      if (selectedCategories.length === 4) {
        this.set('atCapacity', true);
      } else {
        this.set('error', true);
      }

      return;
    }
  },
  /**
   * Fetches the videos of a selected category.
   *
   * @method fetchCategoryVideos
   * @param category The selected category
   * @returns {Promise}
   */
  fetchCategoryVideos(category) {
    return this.get('ajax').request('categories/videos/' + category);
  },
  /**
   * Removes a category based on the index the user selected from their
   * `selectedCategories`.
   *
   * @method removeCategory
   * @param selectedCategory The `selectedCategory` object slated for removal
   */
  removeCategory(selectedCategory) {
    // Takes the now pending removal `selectedCategory` and picks it out of the
    // selectedCategories array.
    let selectedCategories = this.get('selectedCategories').filter( (el) => {
      return el.name !== selectedCategory.name;
    });

    this.set('selectedCategories', selectedCategories);
    this.set('atCapacity', false);
  }
});
