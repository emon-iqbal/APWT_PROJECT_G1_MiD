const express = require('express');
var url = require('url');
//const commentModel = require('./models/commentModel');
const commentModel = require.main.require('./models/commentModel');

const router = express.Router();

router.get('*', (req, res, next) => {

    next();

});

router.get('/hmcreate', (req, res) => {
    if (req.session.uname != "") {

        res.render('comment/hmcreate');
    }
    else {
        res.redirect('/login');
    }
});

router.get('/hmedit/:id', (req, res) => {

    if (req.session.uname != "") {

        var i = req.params.id;

        commentModel.getById(i, function (results) {
            console.log(i);
            res.render('comment/hmedit', { users: results });

        })

    }

    else {
        res.redirect('/login');
    }



});

router.post('/hmedit/:id', (req, res) => {

    if (req.session.uname != "") {

        var i = req.params.id;
        var cResponse = req.body.comment;
       

        commentModel.update(i, cResponse, function (status) {

            if (!status) {

                res.redirect('/home');
            } else {
                res.redirect('/login');
            }

        })

    }
   


});


module.exports = router;

