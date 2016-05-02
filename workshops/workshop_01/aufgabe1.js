var fs = require('fs');
var colour = require('chalk');
fs.readFile('wolkenkratzer.json', 'utf8', function(err,data) 
{
  if (err) throw err;
  var wolkenData = JSON.parse(data);
 wolkenData.wolkenkratzer.sort(function (a,b) {
    if (a.hoehe > b.hoehe) {
      return 1;
    }
    if (a.hoehe < b.hoehe) {
      return -1;
    }
    return 0;
  });
  fs.writeFile(__dirname + "/wolkenkratzer_sortiert.json", JSON.stringify(wolkenData.wolkenkratzer), function(err, data){
    if (err){
      console.log(err);
      return;
    }
    console.log("Datei gespeichert!");
    });
    for(var i = 0; i < wolkenData.wolkenkratzer.length; i++) 
    { 
    console.log(colour.red("Name:"+wolkenData.wolkenkratzer[i].name));
    console.log(colour.yellow("Stadt:"+wolkenData.wolkenkratzer[i].stadt));
    console.log(colour.green("Hoehe:"+wolkenData.wolkenkratzer[i].hoehe));
    console.log("---------------------------------");
    }
});