var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var contents = buf.toString();
var lines = contents.split('\n');

console.log(lines.length - 1);