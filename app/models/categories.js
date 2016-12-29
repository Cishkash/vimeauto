import DS from 'ember-data';

/**
 * Categories model relation to category model
 *
 * @class Model.categories
 * @constructor
 * @extends DS.Model
 */
export default DS.Model.extend({
  categories: DS.belongsTo('category')
});
