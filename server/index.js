var express = require('express');

exports.start = function(PORT, STATIC_DIR, TEST_DIR) {
  var app = express();

  // log requests
  app.use(express.logger('dev'));

  // serve static files for demo client
  app.use(express.static(STATIC_DIR));

  // parse body into req.body
  app.use(express.bodyParser());

  // only for running e2e tests
  app.use('/test/', express.static(TEST_DIR));


  // start the server
  app.listen(PORT, function() {
    //open('http://localhost:' + PORT + '/');
    console.log('Go to http://localhost:' + PORT + '/');
  });
};
