const express = require('express')
const app     = express()
const hbs     = require('hbs') 
const path    = require ('path')

var user = {name : ""}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('index', {user})
  })

// app.get('/profile/:prenom/:age/user', function (req, res){
//     console.log(req.query.q)
//     console.log(req.params.prenom)
//     console.log(req.params.age)
//     res.render('index')
// })

app.get('/search', function (req, res) {
    user.name = req.query.name
    res.send(req.query)
    res.render('index', {user})
  })

  app.post('/search', function (req, res, next) {
    req.body.name = req.body.name.toUpperCase()
    if (req.body.name){
        next()
    } else {
    res.render("index", {user: {name :"0"}})
    }
  })

  app.post('/search', function (req, res,) {
    user.name = req.body.name
    res.send(req.query)
    res.render('index', {user})
  })



  const bodyParser = require('body-parser');
  app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3000, () => console.log('Example app listening on port 3000!'))