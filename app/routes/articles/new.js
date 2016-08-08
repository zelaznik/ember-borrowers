import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('article');
  },
  activate() {
    console.log('----- activate hook called on routes/articles/new.js -----');
  },
  deactivate() {
    console.log('----- DE-activate hook called on routes/articles/new.js -----');
  },
  resetController(controller, isExiting, transition) {
    if (isExiting) {
      console.log('----- resetController hook called on routes/articles/new.js -----');
      var model = controller.get('model');
      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
