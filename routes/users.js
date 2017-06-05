var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/loginPage', function(req, res, next) {
        console.info("恭喜你来到了login的路由文件");
        res.render('login', {});
});
router.post('/login', function(req, res, next) {

    var userName=req.body.userName;
    var password=req.body.password;

    if(userName=="gq" && password=="gq"){
        res.render('success',{username:userName});
    }else{
        res.render('error', {});
    }
});

router.post('/sheng', function(req, res, next) {
    var id=req.body.id;
    console.info(id)
    if (id==1){
    res.json([{name:"哈尔",id:"hei1"},{name:"碎花",id:"hei2"}])
    }
    if (id==2){
        res.json([{name:"大连",id:"liao1"},{name:"上海",id:"liao2"}])
    }

});

module.exports = router;



