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
  addCategory(category) {
    let selectedCategories = this.get('selectedCategories');

    // If they still have room and they're not trying to add something twice,
    // add the object to the array.
    if ( selectedCategories.length <= 4 &&
         !selectedCategories.find(selectedCategory => selectedCategory.name === category.name) ) {

      Ember.set(category, 'assignedColor', this._assignAnotherColor());
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
  removeCategory(category) {
    let selectedCategories = this.get('selectedCategories').filter( (el) => {
      return el.name !== category.name;
    });

    this.set('selectedCategories', selectedCategories);
    this.set('atCapacity', false);
  }
});
