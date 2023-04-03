const Router = require('express');
const router = new Router();
const flatController = require('../controller/flat.controller');

router.post('/flat', flatController.createFlat);
router.get('/flats', flatController.getFlats);
router.get('/flat/:id', flatController.getOneFlat);


module.exports = router;