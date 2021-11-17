const express = require('express');
var path = require('path');
const pinataSDK = require('@pinata/sdk');
const multer = require('multer')
const index = multer({dest: 'uploads/'})

const pinata = pinataSDK('a59706763d8d48a48ddd', '68ff3feb35ed62fca5122e0ee5c5a95311ab9c305fa523df109c22bad3fee527');

const app = express();
app.use(express.json());

pinata.testAuthentication().then((result) => {
    //handle successful authentication here
    console.log(result);
}).catch((err) => {
    //handle error here
    console.log(err);
});

app.post('/upload/file', index.single('file'), function (req, res, next) {
    pinata.pinFromFS(req.file.path, {}).then((result) => {
        //handle results here
        res.json(result)

    }).catch((err) => {
        //handle error here
        console.log(err);
        res.json(err)
    });
});

app.post('/upload/meta', function (req, res, next) {
    pinata.pinJSONToIPFS(req.body).then((result) => {
        //handle results here
        console.log(result);
        res.json(result)
    }).catch((err) => {
        //handle error here
        console.log(err);
        res.json(err)
    });
});


module.exports = app