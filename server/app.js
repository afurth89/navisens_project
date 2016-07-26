const express = require("express")
const app = express();

const bodyParser = require('body-parser');
var db = require('./models');
const methodOverride = require('method-override');
const morgan = require('morgan');

const data = require('./routes/data');

app.use('/views', express.static(__dirname + '/../client/views'))


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(morgan('tiny'));

app.use('/api/data', data)

app.get('*', (req, res) => {
  res.sendFile('layout.html', {root: './client/views'})
})

app.listen(3000, ()=>{
  console.log('Server listening on port 3000');
});

module.exports = app;