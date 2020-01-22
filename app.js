// Require Libraries
const express = require('express');

// App Setup
const app = express();

// Middleware
// Middleware
const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// Routes
// Routes
app.get('/', (req, res) => {
    // const term = req.params.term;
    const query = req.query;
    const term = query['term']

    res.render('home', { term })
  })

app.get('/greetings/:name', (req, res) => {
  // grab the name from the path provided
  
  // render the greetings view, passing along the name
  res.render('greetings', { name });
})

// Start Server

app.listen(3000, () => {
  console.log('Gif Search listening on port localhost:3000!');
});