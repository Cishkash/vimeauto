import DS from 'ember-data';

export default DS.Model.extend({
  created_date: DS.attr(),
  created_time: DS.attr(),
  description: DS.attr(),
  embed: DS.attr(),
  link: DS.attr(),
  name: DS.attr(),
  pictures: DS.attr(),
  user: DS.attr()
});
