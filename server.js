const express = require('express');
const app = express();
const path = require('path')
const bp = require('body-parser');
app.use(bp.json());
app.use(express.static(__dirname + '/public/dist/public'));
require('./server/routes.js')(app);
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});
app.listen(8000 , function(){
    console.log('listen to localhost 8000');
})