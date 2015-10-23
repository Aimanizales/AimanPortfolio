import DS from 'ember-data';

/*
  $      ember g adapter application
  Controla los datos referentes al servicio que se a a usar.
  En este ejemplo es el servidor Mock
 */
export default DS.RESTAdapter.extend({
  //esto es para pegarle a un servidor:
  namespace: 'api'
});
