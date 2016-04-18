console.log('Die Bank zieht nun:\n');
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
            if(summe <21){
                var karten3 =arr[Math.floor(arr.length * Math.random())];
                    console.log("Die 3. Karte ist:", karten3);
                var summe2 = summe+karten3
                if(summe2 >21){
                    console.log("Die Bank hat verloren, das Ergebnis war:", summe2);
                    process.exit();
                }
                console.log("Das Ergebnis ist:", summe2);
            }
     
       