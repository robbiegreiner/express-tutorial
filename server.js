const express = require('express');
const app = express();
const path = require('path');

const urlLogger = (request, response, next) => {
  console.log('Request URL: ', request.url);
  next();
}

const timeLogger = (request, response, next) => {
  console.log('Datetime: ', new Date(Date.now()).toString());
  next();
}

app.use(urlLogger, timeLogger)
app.use(express.static(path.join(__dirname, 'public')));

app.use((request, response) => {
  response.status(404).sendFile(path.join(__dirname, 'public', '/404.html'))
})


app.get('/', (request, response) => {
  // We don't need to explicitly use this handler or send a response
  // because Express is using the default path of the static assets
  // to serve this content
});

app.get('/json', (request, response) => {
  response.status(200).sendFile(path.join(__dirname,'public', '/robbie.json'));
});

app.get('/sunsets', (request, response) => {
  response.status(200).sendFile(path.join(__dirname, 'public', '/sunsets.html'))
})

app.listen(3000, () => {
  console.log('Express Intro running on localhost:3000');
});


const middlewareFuncName = (request, response, next) => {
  // Middleware code to run here

  // Move on to next middelware function or to the route handler
  next();
}
