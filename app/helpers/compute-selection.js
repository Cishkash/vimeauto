import Ember from 'ember';

export default Ember.Helper.extend({
  categoryService: Ember.inject.service('category'),
  selectedCatsUpdated: Ember.observer('categoryService.selectedCategories', () => {
    this.recompute();
  }),
  compute([param, ...params]) {
    return this.get(param);
  }
});
