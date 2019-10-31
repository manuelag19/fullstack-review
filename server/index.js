const express = require('express');
const bodyParser = require('body-parser');
const gitHub = require('../helpers/github.js');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.post('/repos', function (req, res) {
  // req.body -> {username 'search term'}
  // gitHub.getReposByUsername(req, (err, data) => {
  //   var data = data;
  //   console.log(data);
  // });
  return gitHub.getReposByUsernameAsync(req)
    .then((repos) => {
      console.log(repos);
      res.end();
    })
    .catch(error => {
      throw err;
    })
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

