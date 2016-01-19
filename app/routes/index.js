import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return {
      print: [{
        name: 'Work1',
        date: '2004'
      },
      {
        name: 'Work2',
        date: '2005'
      },
      {
        name: 'Work3',
        date: '2005'
      }]
    };
  }
});
