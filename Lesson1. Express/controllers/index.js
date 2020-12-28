const { Router } = require('express');
const router = Router();

// 첫번재 인수 url 지정, 두번째 인수 폴더 지정
router.use('/admin', require('./admin'));

module.exports = router;