var fs = require('fs');
var colour = require('chalk');
fs.readFile('wolkenkratzer.json', 'utf8', function(err,data) 
{
  if (err) throw err;
  var wolkenData = JSON.parse(data);
  for(var i = 0; i < wolkenData.wolkenkratzer.length; i++) 
    { 
    console.log(colour.red("Name:"+wolkenData.wolkenkratzer[i].name));
    console.log(colour.yellow("Stadt:"+wolkenData.wolkenkratzer[i].stadt));
    console.log(colour.green("Hoehe:"+wolkenData.wolkenkratzer[i].hoehe));
    console.log("---------------------------------");
    }
});