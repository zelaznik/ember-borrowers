import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('friend');
  },
  activate() {
    console.log('----- activate hook called on routes/friends/new.js -----');
  },
  deactivate() {
    console.log('----- DE-activate hook called on routes/friends/new.js -----');
  },
  resetController(controller, isExiting) {
    if (isExiting) {
      console.log('----- resetController hook called on routes/friends/new.js -----');
      var model = controller.get('model');
      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
