module.exports = function(app) {
  var express = require('express');
  var visualRouter = express.Router();

  visualRouter.get('/', function(req, res) {
    res.send({
      'visual': [{
        id: '1',
        name: 'Work1',
        date: '2004'
      },
      {
        id: '2',
        name: 'Work2',
        date: '2005'
      },
      {
        id: '3',
        name: 'Work3',
        date: '2005'
      }]
    });
  });

  visualRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  visualRouter.get('/:id', function(req, res) {
    res.send({
      'visual': {
        id: req.params.id
      }
    });
  });

  visualRouter.put('/:id', function(req, res) {
    res.send({
      'visual': {
        id: req.params.id
      }
    });
  });

  visualRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/visuals', visualRouter);
};
