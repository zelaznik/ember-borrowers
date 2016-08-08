import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('ajax').request('/friends').then(function(data) {
      return {
        friendsCount: data.data.length
      };
    });
  }
});
