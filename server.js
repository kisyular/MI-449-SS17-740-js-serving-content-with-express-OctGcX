var express = require('express')
var app = express()
var port = process.env.PORT || 8080
var navigationLink = {}
var homepageLink = {}

function createHomeNavigation (article) {
  var id = Object.keys(navigationLink).length
  article.createdAt = new Date()
  navigationLink[id] = article
}

function createBackHome (homepage) {
  var id = Object.keys(homepageLink).length
  homepage.createdAt = new Date()
  homepageLink[id] = homepage
}

createHomeNavigation({
  title: 'Client Side',
  content: 'pages/client'
})
createHomeNavigation({
  title: 'Server Side',
  content: 'pages/server'
})
createHomeNavigation({
  title: 'Data Analysis',
  content: 'pages/data'
})

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.static('static'))
app.get('/', function (request, response) {
  response.render('homepage', {
    navigationLink: navigationLink
  })
})

createBackHome({
  title: 'Back to Homepage',
  content: '/'
})

app.get('/pages/client', function (request, response) {
  response.render('pages/client/client', {
    homepageLink: homepageLink
  })
})

app.get('/pages/server', function (request, response) {
  response.render('pages/server/serverside', {
    homepageLink: homepageLink
  })
})
app.get('/pages/data', function (request, response) {
  response.render('pages/data/data', {
    homepageLink: homepageLink
  })
})

app.listen(port)
