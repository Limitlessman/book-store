'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

//app.use(express.static('client'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render("index");
});

app.listen(3000, function () {
  console.log("listeting in port 3000");
});