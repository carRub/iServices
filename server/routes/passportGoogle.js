const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const googleConfig = require('../googleConfig');
const users = require('../models/usuariosModel');
const jwt = require('jsonwebtoken');

passport.use(new GoogleStrategy({
    clientID: googleConfig.clientID,
    clientSecret: googleConfig.clientSecret,
    callbackURL: googleConfig.callbackURL
},async function(accessToken,refreshToken,profile,done){
    console.log("PROFILE",profile._json);

    if(profile == null){
        done(null,false,{error:"No fue posible autentificarse"})
        return;
    }

    let newUser = new users({
        uid: null,
        nombre: profile._json.name,
        apellidos: null,
        direccion: null,
        email: profile.emails[0].value,
        edad: null,
        password: null,
        celular: null,
        foto: profile.photos[0].value,
        estado: null,
        profesionista: false,
        favoritos: []
    })

    let findUser = await users.find({email:newUser.email});

    if(findUser){
        done(null,findUser);
        return;
    }else{
        console.log("insertando datos en mongo DB");
        await newUser.save();
        done(null, newUser);
    }
}
))

function googleLogin(req,res){

    console.log("Entrando a google login");
    passport.authenticate('google',(err,user,info)=>{
        console.log("Entrando a google strategy");
        console.log(user);

        if(user){
            let token = jwt.sign({nombre:user.nombre},'palabra muy secreta',{expiresIn:'1h'})
            res.send({token})
        }else{
            res.status(401).send(info);
        }

        //res.send({ok:"ok"});

    })(req,res);

}

module.exports = {googleLogin};