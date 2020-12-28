const { Router } = require('express');
const router = Router();
const ctrl = require('./admin.ctrl');

// URL과 미들웨어가 눈에 훨씬 잘 들어오게끔 설계
// 뒤의 함수 부분은 컨트롤러 파일 내에 정의

router.get( '/products', ctrl.get_products );

router.get( '/products/write', ctrl.get_products_write );

router.post( '/products/write', ctrl.post_products_write );

module.exports = router;