let express = require('express');
let bodyParser = require('body-parser');
let apiRoutes = require("./api-routes");
let mongoose = require('mongoose');
let app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true});
var db = mongoose.connection;

if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")


var port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Hello World com Express'));

app.use('/api', apiRoutes);

app.listen(port, function (){
    console.log("running resthub on port " + port);
});