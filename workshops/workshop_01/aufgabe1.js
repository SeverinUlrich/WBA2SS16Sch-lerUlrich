var fs = require('fs');
fs.readFile('wolkenkratzer.json', 'utf8', function(err,data) 
{
  if (err) throw err;
  var wolkenData = JSON.parse(data);
  for(var i = 0; i < wolkenData.length; i++) 
    { 
    console.log("Name:"+wolkenData[i].name);
    console.log("Stadt:"+wolkenData[i].stadt);
    console.log("Hoehe:"+wolkenData[i].hoehe);
    console.log("---------------------------------");
    }
});