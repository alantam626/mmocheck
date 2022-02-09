const express = require('express');
const router = express.Router();
const gameindexCtrl = require('../../controllers/api/gameindex')

router.get('/', gameindexCtrl.getAll)

module.exports = router