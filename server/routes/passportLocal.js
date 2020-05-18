const passport = require('passport');

const localStrategy = require('passport-local').Strategy;

const jwt = require('jsonwebtoken');

const users = require('../models/usuariosModel');
const bcrypt = require('bcryptjs');

passport.use(new localStrategy({
    usernameField:'email',
    passwordField:'password'
},async function(username,password,done){
    console.log("datos del form", username,password);
    //password = bcrypt.hashSync(password,12);
    console.log("datos del form", username,password);
    let usr = await users.findOne({email:username,password:password});
    console.log("user encontrado",usr);
    //"$2a$12$odRv1LwImlwFPpR8.xhLPeT4T0TFIysuaBScUs4x14pZQH7KSnAg6"
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
            let token = jwt.sign({nombre:usr.nombre},'palabra muy secreta',{expiresIn:'1h'})
            res.send({token})
        }else{
            res.status(401).send(info);
        }
    })(req,res);
}

module.exports = {login};