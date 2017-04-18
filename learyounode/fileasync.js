var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', callbackFnc)

function callbackFnc (err, data) {
  var contents = data;
  var lines = contents.split('\n');

  console.log(lines.length - 1);
}