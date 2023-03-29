const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const {get_skin_prediction} = require('./model/dummy-model')

const {handleServerErrors} = require('./controllers/error-handling-controller');


app.use(express.json())

const upload = multer({ dest: 'uploads/' });

app.post('/api/image', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  

  
  res.json({req:req});
});




app.use('/*', (req, res)=> {
    res.status(404).send({msg: 'not found'});
})
app.use(handleServerErrors);


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});



module.exports = app;