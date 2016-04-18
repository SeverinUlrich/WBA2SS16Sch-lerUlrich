var http = require("http");
http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Succesfull started Server\n');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/\n');
var version = 0.01;
console.log("Willkommen beim Blackjack Programm SSU\nDies ist die Version:", version);

const readline = require('readline');
const rl = readline.createInterface({   
  input: process.stdin,
  output: process.stdout
                                    });

rl.question('Möchten Sie mit dem Spiel beginnen? 1=ja 0=nein\nEingabe:', (answer) => {
  // TODO: Log the answer in a database
  if(answer >=1){
      console.log("Starting\nDie zwei erhaltenen Karten sind:");
        var array = []
   
   
   
   
   
   
   
   
      }
  else{
      console.log("Shutting Down");
      process.exit();
      }
  rl.close();
});
