/*
Il programma dovrà chiedere all'utente il numero di Km che vuole percorrere e l'età del passeggero.
- chiedere i km
- chiedere l'età
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
-condizioni:
il prezzo del biglietto  è definito in base ai km (0,21 $ al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, 
per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. 
-scrivere il prezzo
-limitare il prezzo a 2 decimali

*/

function valida(){
    let price = 0.21;
    let ValueKm = document.getElementById("km").value;
    let ValueAge = document.getElementById("eta").value;
        console.log(ValueKm);
        console.log(ValueAge);
    let KmPrice = ValueKm * price;
        console.log(KmPrice)

    let kmPrice = ValueKm * price;
        console

        let discount;
        if (ValueAge < 18) {
            discount = 20;
            document.getElementById('ticket').innerHTML = KmPrice - ((KmPrice * discount) / 100);
        } else if (ValueAge > 64) {
            discount = 40;
            document.getElementById('ticket').innerHTML = KmPrice - ((KmPrice * discount) / 100);
        }  else {
            discount = 0 
            document.getElementById('ticket').innerHTML = KmPrice;
        } 
        console.log(discount);
        }

