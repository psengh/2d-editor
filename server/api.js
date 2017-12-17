var express = require('express');
var connection = require('./database');

var router = express.Router();

/* GET all diagrams */
router.get('/diagrams', function (req, res, next) {
  connection.query('SELECT * FROM diagrams',
    function (err, result) {
      if (err) return next(err);
      return res.status(200).send({
        result: result
      })
    }
  );
});

/* POST insert diagram */
router.post('/diagram', function (req, res, next) {
  connection.query('INSERT INTO diagrams SET ?', req.body,
    function (err, result) {
      if (err) return next(err);
      console.log(result, err);
      return res.status(200).send({
        result: result
      })
    }
  );
});

/* POST insert diagram */
router.get('/diagram/:id', function (req, res, next) {
  var id = JSON.parse(req.params.id);
  connection.query('SELECT * FROM diagrams WHERE id = ?', id,
    function (err, result) {
      if (err) return next(err);
      console.log(result, err);
      return res.status(200).send({
        result: result
      })
    }
  );
});

module.exports = router;