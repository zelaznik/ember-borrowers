import { moduleForModel, test } from 'ember-qunit';

moduleForModel('loan', 'Unit | Model | loan', {
  // Specify the other units that are required for this test.
  needs: ['model:friend', 'model:article']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
