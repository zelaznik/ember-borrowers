import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('loans/edit-form', 'Integration | Component | loans/edit form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{loans/edit-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#loans/edit-form}}
      template block text
    {{/loans/edit-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
