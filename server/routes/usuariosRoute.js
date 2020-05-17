const express = require('express');
const router = express.Router();
const usuariosModel = require('../models/usuariosModel');

const fileUpload = require('express-fileupload');
var busboy = require('connect-busboy');

const AWS = require('aws-sdk');
const Busboy = require('busboy');

const BUCKET_NAME = 'pae2020';
const IAM_USER_KEY = 'AKIAWZONVNHIW7A55GXY';
const IAM_USER_SECRET = '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';

router.use(busboy());
router.use(fileUpload());

router.get('/', async (req, res) => {
  try {
    const obtenerUsuarios = await usuariosModel.find();
    res.json(obtenerUsuarios);
  } catch (err) {
    res.json({
      message: err
    });
  }
});


router.post('/', async (req, res) => {

  var imageUrl = "";

  function uploadToS3(file) {/////////////////////////////////////
    let s3bucket = new AWS.S3({
        accessKeyId: IAM_USER_KEY,
        secretAccessKey: IAM_USER_SECRET,
        Bucket: BUCKET_NAME
    });
  s3bucket.createBucket(async function () {

        console.log("Creando bucket");

        var params = {
            Bucket: BUCKET_NAME,
            Key: file.name,
            Body: file.data
        };
      s3bucket.upload(params,async function (err, data) {
            if (err) {
                console.log('error in callback');
                console.log(err);
            }
            console.log('success');
            console.log(data);
            //console.log(data.Location);

            imageUrl = data.Location;

            console.log("ImageURL",imageUrl);


            const nuevoUsuario = new usuariosModel({
              uid: req.body.uid,
              nombre: req.body.nombre,
              apellidos: req.body.apellidos,
              direccion: req.body.direccion,
              email: req.body.email,
              edad: req.body.edad,
              password: req.body.password,
              celular: req.body.celular,
              element2: data.Location,
              estado: req.body.estado,
              profesionista: req.body.profesionista,
              favoritos: req.body.favoritos,
              element1: req.body.element1,
              foto: imageUrl
            });

          
            console.log("cuerpo de la petición",req.body);
            console.log("element2", nuevoUsuario.element2);
            console.log("FOTO", nuevoUsuario.foto);

            try {
              const usuarioGuardado = await nuevoUsuario.save();
              res.json(usuarioGuardado);
            } catch (err) {
              if (res.status == 400)
                res.status(400).json({
                  message: "No se puede procesar tu solicitud",
                  error: err
                });
          
              else if (err.status == 401) {
                res.status(err.status).json({
                  message: "No estas autorizado",
                  error: err
                });
          
              } else if (res.status == 403) {
                res.status(500).json({
                  message: "Algo salio mal :( !!",
                  error: err
                });
              }
            }



        });
    });
}


const element1 = req.body.element1;

    var busboy = new Busboy({
        headers: req.headers
    });

    busboy.on('finish', async function () {
      console.log('Upload finished');

      // {
      //    element2: {
      //      data: ...contents of the file...,
      //      name: 'Example.jpg',
      //      encoding: '7bit',
      //      mimetype: 'image/png',
      //      truncated: false,
      //      size: 959480
      //    }
      // }

      // Desde request
      const file = req.files.element2;
      console.log("FILE",file);

      const file1 = req.files.foto;

      console.log("file1",file1);

      // SUBIR ARCHIVO A BUCKET
      uploadToS3(file);
  });

  req.pipe(busboy);

 

});



//por ID de MongoDB
router.get('/:uid', async (req, res) => {
  //console.log(req.params.uid); //imprime uid recibido de url
  try {
    const usuarioEncontrado = await usuariosModel.findById({
      _id: req.params.uid
    });
    res.json(usuarioEncontrado);
  } catch (err) {
    if (res.status == 400)
      res.status(400).json({
        message: "No se puede procesar tu solicitud",
        error: err
      });

    else if (err.status == 401) {
      res.status(err.status).json({
        message: "No estas autorizado",
        error: err
      });

    } else if (res.status == 403) {
      res.status(500).json({
        message: "Algo salio mal :( !!",
        error: err
      });
    }
  }
});


//por uid correcto
router.delete('/:uid', async (req, res) => {
  try {
    const usuarioBorrado = await usuariosModel.deleteOne({
      uid: req.params.uid
    });
    res.json(usuarioBorrado);
  } catch (err) {
    if (res.status == 400)
      res.status(400).json({
        message: "No se puede procesar tu solicitud",
        error: err
      });

    else if (err.status == 401) {
      res.status(err.status).json({
        message: "No estas autorizado",
        error: err
      });

    } else if (res.status == 403) {
      res.status(500).json({
        message: "Algo salio mal :( !!",
        error: err
      });
    }
  }
})


router.put('/:uid', async (req, res) => {
  try {
    const usuarioActualizado = await usuariosModel.updateOne({
      uid: req.params.uid
    }, {
      $set: {
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        direccion: req.body.direccion,
        email: req.body.email,
        edad: req.body.edad,
        password: req.body.password,
        celular: req.body.celular,
        foto: req.body.foto,
        estado: req.body.foto,
        favoritos: req.body.favoritos
      }
    })
    res.json(usuarioActualizado);
  } catch (err) {
    if (res.status == 400)
      res.status(400).json({
        message: "No se puede procesar tu solicitud",
        error: err
      });

    else if (err.status == 401) {
      res.status(err.status).json({
        message: "No estas autorizado",
        error: err
      });

    } else if (res.status == 403) {
      res.status(500).json({
        message: "Algo salio mal :( !!",
        error: err
      });
    }
  }
})

module.exports = router;