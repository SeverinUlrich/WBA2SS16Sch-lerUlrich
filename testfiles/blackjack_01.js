//--------------------------HHTP-Server------------------------------------------------------------

var http = require("http");
http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Succesfull started Server\n');
}).listen(8081);

console.log('\n\nServer running at http://127.0.0.1:8081/\n\n');

//--------------------------------------------------------------------------------------------------


var version = 0.01;
console.log("-------------------------------------------------------------");
console.log("Willkommen beim Blackjack Programm SSU\nDies ist die Version:", version);
console.log("-------------------------------------------------------------\n\n");

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout, null)
                                    
rl.question("Möchten Sie mit dem Spiel beginnen? 1=ja 0=nein\nEingabe:", (answer) => {
  if(answer >=1) { 
       var arr = ['2','3','4','5','6','7','8','9','10','Bube','Dame','Koenig','Ass']
       arr[0]=2; arr[1]=3; arr[2]=4; arr[3]=5; arr[4]=6; arr[5]=7; arr[6]=8; arr[7]=9; arr[8]=10; arr[9]=10; arr[10]=10; arr[11]=10; arr[12]=10;
       arr[13]=11;
       var karten = arr[Math.floor(arr.length * Math.random())]; 
            console.log("-------------------------------------------------------------");
            console.log("Die 1. Karten ist:", karten); 
       var karten2 = arr[Math.floor(arr.length * Math.random())];  
            console.log("Die 2. Karte ist:", karten2);
            var summe = karten+karten2
            console.log("Die Summe beträgt:", summe);   
            console.log("-------------------------------------------------------------\n\n");
 
             rl.question("Möchten Sie eine weitere Karte ziehen? 1=ja 0=nein\nEingabe:", (answer2) => {
                 if(answer2 >=1) {
                 var karten3 = arr[Math.floor(arr.length * Math.random())];
                 console.log("Die 3. Karte ist:", karten3);
                 var summe2 = summe+karten3;
                     if(summe2 >21){
                     console.log("Die Summe ist groesser 21, Sie haben verloren!");
                     process.exit();
                     }
                     else{
                     console.log("Die neue Summe beträgt:", summe2);
                     }
                 }
                 else{
                 console.log("Das Ergebnis beträgt:", summe);
                 console.log("\nDie Bank fängt nun an zu ziehen");
                 }
                  rl.close();
                  process.stdin.destroy();
                 });
  } 
   else{     
      console.log("\n-------------------------------------------------------------");
      console.log("\nShutting Down");   
      console.log("-------------------------------------------------------------");
      process.exit();
      rl.close()
      process.stdin.destroy()
      }
      }
        );
 