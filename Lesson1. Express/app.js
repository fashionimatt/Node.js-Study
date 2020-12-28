const express = require('express');
const nunjucks = require('nunjucks');
const logger = require('morgan');
// body-parser는 express의 내장 모듈이므로 install 할 필요가 없다.
const bodyParser = require('body-parser');

const admin = require('./routes/admin');

const app = express();
const port = 3000;

nunjucks.configure('template', {
    autoescape: true,
    express: app
});

// 미들웨어 셋팅
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 정적 폴더 세팅 : 첫번째 변수가 url, 두번째 인수가 정적 자료를 가져올 폴더명
app.use( '/uploads', express.static('uploads') );

// 전역 변수 설정
app.use( (req, res, next) => {
    app.locals.isLogin = false;
    next();
});

app.get('/', (req,res) => {
    res.send('express start');
});

// Routing
app.use('/admin', admin);

app.use( (req, res, _) => {
    res.status(400).render('common/404.html');
});

app.use( (req, res, _) => {
    res.status(500).render('common/500.html');
});
 
app.listen( port, () => {
    console.log('Express listening on port', port);
});