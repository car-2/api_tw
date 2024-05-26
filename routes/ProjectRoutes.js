const controlador = require('../controllers/ProjectControler');

const express = require('express');
const router = express.Router();

router.get('/', controlador.list);
router.post('/',controlador.create);
router.put('/:id',controlador.update);
router.delete('/:id', controlador.delete);

module.exports = router;