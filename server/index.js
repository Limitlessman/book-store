import express from 'express';
import serverRender from './render';
const app = express();

//app.use(express.static('client'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render("index",{
    content: serverRender()
  });
});

app.listen(3000, function(){
  console.log("listeting in port 3000");
});
