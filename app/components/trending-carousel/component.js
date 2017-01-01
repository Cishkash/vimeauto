import Ember from 'ember';

export default Ember.Component.extend({

  didRecieveAttrs() {
    console.log(this.get('element'));
  }
});
