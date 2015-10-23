import Ember from 'ember';

export default Ember.Route.extend({

  model () {
    return Ember.$.getJSON('https://www.reddit.com/r/backtothefuture.json').
           then( (JSONresponse) => {
             return JSONresponse.data.children;
           });
  }
});
