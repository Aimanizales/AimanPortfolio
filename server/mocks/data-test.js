module.exports = function(app) {
  var express = require('express');
  var dataTestRouter = express.Router();

  dataTestRouter.get('/', function(req, res) {
    res.send({
      'data-test': [{
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

  dataTestRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  dataTestRouter.get('/:id', function(req, res) {
    res.send({
      'data-test': {
        id: req.params.id
      }
    });
  });

  dataTestRouter.put('/:id', function(req, res) {
    res.send({
      'data-test': {
        id: req.params.id
      }
    });
  });

  dataTestRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/data-test', dataTestRouter);
};
