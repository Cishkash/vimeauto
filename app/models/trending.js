import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr(),
  name: DS.attr(),
  pictures: DS.attr(),
  videoId: DS.attr(),
  uri: DS.attr(),
  user: DS.attr()
});
