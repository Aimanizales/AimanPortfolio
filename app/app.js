import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

//The purpose of app is to set up app-wide constructs (loc 317 Ember2 book)

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver //used to look up classes throghout the app
});

loadInitializers(App, config.modulePrefix);

export default App;
