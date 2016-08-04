import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  twitter: DS.attr('string'),
  loans: DS.hasMany('loan'),
  fullName: Ember.computed('firstName', 'lastName', {
    get() {
      return this.get('firstName') + ' ' + this.get('lastName');
    }
  })
});
