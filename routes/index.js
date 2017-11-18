var express = require('express');
const controllers = require('../controllers');
var router = express.Router();
var array = [1, 2, 3];

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/test', controllers.tvController.getArray);
router.post('/test', controllers.tvController.postArray);
router.get('/test/:id', controllers.tvController.getById);
router.put('/test/:id', controllers.tvController.updateTVShow);
router.delete('/test/:id', controllers.tvController.deleteTVShow);
module.exports = router;