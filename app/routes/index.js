import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  model() {
    return this.get('ajax').request('/friends').then(
      (data) => ({friendsCount: data.data.length}),
      (err)  => (alert(err))
    );
  }
});
