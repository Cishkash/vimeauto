import DS from 'ember-data';

/**
 * Category model related to the categories returned from the `/categories`
 * endpoint
 *
 * @class Model.category
 * @constructor
 * @extends DS.Model
 */
export default DS.Model.extend({
  uri: DS.attr(),
  name: DS.attr(),
  link: DS.attr(),
  top_level: DS.attr(),
  pictures: DS.attr(),
  last_video_featured_time: DS.attr(),
  parent: DS.attr(),
  metadata: DS.attr(),
  subcategories: DS.attr(),
  icon: DS.attr(),
  resource_key: DS.attr()
});
