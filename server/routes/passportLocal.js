const passport = require('passport');

const localStrategy = require('passport-local').Strategy;

const jwt = require('jsonwebtoken');

const users = require('../models/usuariosModel');

passport.use(new localStrategy({
    usernameField:'email',
    passwordField:'password'
},async function(username,password,done){
    console.log("datos del form", username,password);
    let usr = await users.findOne({email:username,password:password});
    //console.log("user encontrado",usr);

    if(usr){
        done(null,usr);
    }else{
        done(null,false,{error:"Datos incorrectos"});
    }

    
}))

function login(req,res){
    console.log("login with local passport",req.body);
    passport.authenticate('local',(err,usr,info)=>{
        if(usr){    
            console.log("this is user", usr);
            let token = jwt.sign({nombre:usr.nombre},'palabra muy secreta',{expiresIn:'1h'})
            res.send({token, mid: usr._id});
        }else{
            res.status(401).send(info);
        }
    })(req,res);
}

module.exports = {login};