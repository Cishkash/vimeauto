import { moduleForModel, test } from 'ember-qunit';

moduleForModel('category', 'Unit | Model | category', {
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  assert.ok(!!model);
});
