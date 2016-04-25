var fs = require('fs');
fs.readFile('wolkenkratzer.json', 'utf8', function(err,data) 
{
  if (err) throw err;
  var wolkenData = JSON.parse(data);
  for(var i = 0; i < wolkenData.wolkenkratzer.length; i++) 
    { 
    console.log("Name:"+wolkenData.wolkenkratzer[i].name);
    console.log("Stadt:"+wolkenData.wolkenkratzer[i].stadt);
    console.log("Hoehe:"+wolkenData.wolkenkratzer[i].hoehe);
    console.log("---------------------------------");
    }
});