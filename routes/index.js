var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/file', (req, res)=> {
  let path = req.query.path

  if (fs.existsSync(path)) {
    fs.readFile(path, (error, data) => {
      if (error) res.status(400).json({error});
      else res.status(200).end(data);
    })
  } else {
    res.status(400).json({
      error: 'File not found'
    })
  }
});

router.delete('/file', (req, res) => {
  let form = new formidable.IncomingForm();

  form.parse(req, (error, fields, file) => {
    let path = fields.path;

    if (fs.existsSync(path))
      fs.unlink(path, err => {
        if (err) {
          res.status(400).json({
            err
          });
        }
        else {
          res.json({
            fields
          });
        }
      })
      
  });
});



router.post('/upload', (req, res) => {
  let form = new formidable.IncomingForm({
    uploadDir: './upload',
    keepExtensions: true
  });

  form.parse(req, (err, fields, files) => {

    res.json({
      files
    });
  });

});

module.exports = router;
