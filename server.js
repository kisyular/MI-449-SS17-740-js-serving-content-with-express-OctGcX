var express = require('express')
var app = express()
var port = process.env.PORT || 8080

var languages = {
  'Server Side': {
    'title': 'Server Side Programming',
    'Description': 'Learning server side programming is hard. In this example, you could try Python-Django Framework. This online free server side tutorial in Django for beginners will get you started. If you are interested, give a try at:',
    'More Information': 'https://pythonprogramming.net/django-web-development-with-python-intro/',
    'Image': 'https://css-tricks.com/wp-content/csstricks-uploads/serversideresults.jpg',
    'ImageUrl': '../server.jpg',
    'PageUrl': 'server',
    'ReturnHome': '../'
  },

  'Client Side': {
    'title': 'Client Side Programming',
    'Description': 'Learning Client side programming is hard. Codecademy offers an excellent client side languages for beginners such as CSS and HTML. If you are interested in learning the following languages:',
    'More Information': 'https://www.codecademy.com/learn/learn-html-css',
    'Image': 'http://www.di.univaq.it/malavolta/files/html5presentations/ivano/assets/logos.pn',
    'ImageUrl': '../client.png',
    'PageUrl': 'client',
    'ReturnHome': '../'
  },
  'Data Analysis': {
    'title': 'Data Programming',
    'Description': 'For Beginner into Data Science, I recommend starting with Python. Python is an open language and has numerous libraries to help you in data Analysis',
    'More Information': 'https://pythonprogramming.net/data-analysis-tutorials/',
    'Image': 'https://sites.google.com/site/r4statistics/_/rsrc/1318535062528/popularity/Fig_6_KDnuggetsPollLanguages.PNG',
    'ImageUrl': '../data.png',
    'PageUrl': 'data',
    'ReturnHome': '../'
  }
}

// function createLanguagesPages (homepage) {
//   var id = Object.keys(languages).length
//   homepage.createdAt = new Date()
//   languages[id] = homepage
// }
//
// createLanguagesPages({
//   title: 'Client Side',
//   content: 'pages/'
// })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.static('static'))

app.get('/', function (request, response) {
  response.render('homepage', {
    language: languages
  })
})

app.get('/pages/client', function (request, response) {
  response.render('pages/index', {
    language: languages['Client Side']
  })
})

app.get('/pages/server', function (request, response) {
  response.render('pages/index', {
    language: languages['Server Side']
  })
})

app.get('/pages/data', function (request, response) {
  response.render('pages/index', {
    language: languages['Data Analysis']
  })
})

app.listen(port)
