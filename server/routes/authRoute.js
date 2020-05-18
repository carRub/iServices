var express = require('express');
var router = express.Router();
const usuariosModel = require('../models/usuariosModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'llaveSecreta';
const passportLocal = require('./passportLocal');
const passportGoogle = require('./passportGoogle');
const passport = require('passport');

/*router.post('/', function (req, res, next) {
    if (!req.body.email || !req.body.password) {
        res.status(400).json({
            status: "error",
            message: "Enviame el email y password",
            data: null
        });
        next(err);
    }
    usuariosModel.findOne({
        email: req.body.email
    }, function (err, userInfo) {
        if (err) {
            res.status(503).json({
                status: "error",
                message: "error en db"
            });
            next(err);
        } else {
            if (!userInfo) {
                res.status(401).json({
                    status: "error",
                    message: "Invalido/Usuario no existente",
                    data: null
                });
                next();
                return
            }
            if (bcrypt.compareSync(req.body.password, userInfo.password)) {
                const token = jwt.sign({
                    id: userInfo._id,
                }, SECRET_KEY, {
                    expiresIn: '10h'
                });
                res.json({
                    status: "Login exitoso.",
                    message: "Usuario encontrado!",
                    data: {
                        user: userInfo,
                        token: token
                    }
                });
            } else {
                res.status(401).json({
                    status: "error",
                    message: "Datos invalidos",
                    data: null
                });
                next();
            }
        }
    });
});*/

router.post('/',passportLocal.login);

router.get('/google/login',passport.authenticate('google',{scope:['profile','email']}));


//router.get('/google/redirect',passportGoogle.googleLogin);
router.get('/google/redirect',passportGoogle.googleLogin);

module.exports = router;


