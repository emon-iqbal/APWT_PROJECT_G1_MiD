const express = require('express');
var url = require('url');
//const commentModel = require('./models/commentModel');
const commentModel = require.main.require('./models/commentModel');

const router = express.Router();

router.get('*', (req, res, next) => {

    next();

});

router.get('/create', (req, res) => {
    if (req.session.uname != "") {

        res.render('comment/create');
    }
    else {
        res.redirect('/login');
    }
});


// router.post('/create', (req, res) => {

//     if (req.session.uname != "") {
//         rtag = req.session.uname;
//         var newPost = {
//             pTitle: req.body.pTitle,
//             rName: req.body.rName,
//             rPrice: req.body.rPrice,
//             rType: req.body.rType,
//             rDesc: req.body.rDesc,
//             rTag: rtag
//         };

//         userModel.insert(newPost, function (status) {
//             console.log(status);
//             if (!status) {
//                 res.redirect('/home');
//             } else {
//                 res.redirect('/login');
//             }

//         })

//     }
//     else {
//         res.redirect('/login');
//     }


// });

router.get('/edit/:id', (req, res) => {

    if (req.session.uname != "") {

        var i = req.params.id;

        commentModel.getById(i, function (results) {
            console.log(i);
            res.render('comment/edit', { users: results });

        })

    }

    else {
        res.redirect('/login');
    }



});

router.post('/edit/:id', (req, res) => {

    if (req.session.uname != "") {

        var i = req.params.id;
        var cResponse = req.body.comment;
        // var editPost = {
        //     cResponse: req.body.cResponse,


        // };

        //console.log(editPost.pTitle);

        commentModel.update(i, cResponse, function (status) {

            if (!status) {

                res.redirect('/home');
            } else {
                res.redirect('/login');
            }

        })

    }
    // else{
    // 		res.redirect('/login');
    // 	}


});

// router.get('/delete/:id', (req, res) => {




// 	res.render('comment/delete');



// 	//console.log(editUser.eName);




// });

// router.post('/delete/:id', (req, res) => {

// 	var i = req.params.id;

// 	commentModel.delete(i, function (status) {

// 		if (!status) {

// 			res.redirect('/home/commentlist');
// 		} else {
// 			res.redirect('/login');
// 		}

// 	})
// });


module.exports = router;

