import Ember from 'ember';

export default Ember.Route.extend({

  model () {
    // return Ember.$.getJSON('https://www.reddit.com/r/backtothefuture.json').
    //        then( (JSONresponse) => {
    //          return JSONresponse.data.children;
    //        });
    //        
    // esto es una promesa que por debajo está haciendo un llamado AJAX:
    return this.store.findAll('visual');
  }
});
