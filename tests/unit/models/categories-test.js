import { moduleForModel, test } from 'ember-qunit';

moduleForModel('categories', 'Unit | Model | categories', {
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  assert.ok(!!model);
});
