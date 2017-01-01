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


  // Methods
  // ---------------------------------------------------------------------------

  /**
   * Returns a randomly assigned color.
   *
   * @method _assignColor
   * @private
   * @returns {String}
   */
  _assignColor() {
    const toHex = (toHex) => {
      // Bump the color up if it's too dark.
      // Sometimes it's still too dark /sigh.
      let color = (toHex < 75) ? toHex + 75 : toHex
      // Converts it to hex
      let hex = color.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    };

    let colorArray = [],
        colorString;

    // Get 3 random numbers
    for (let i = 0; i < 3; ++i) {
      colorArray.push(Math.floor(Math.random() * 255))
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
  addCategory(category) {
    let selectedCategories = this.get('selectedCategories');

    // If they still have room and they're not trying to add something twice,
    // add the object to the array.
    if ( selectedCategories.length <= 4 &&
         !selectedCategories.find(selectedCategory => selectedCategory.name === category.name) ) {

      category.assignedColor = this._assignColor();
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
  }
});
