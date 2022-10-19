function validation(){
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
            document.getElementById('ticket').innerHTML = KmPrice - ((KmPrice * discount) / 100); //* kmprice - (price * valueKm) * (20 / 100);} //*
        } else if (ValueAge > 64) {
            discount = 40;
            document.getElementById('ticket').innerHTML = KmPrice - ((KmPrice * discount) / 100);
        }  else {
            discount = 0 
            document.getElementById('ticket').innerHTML = KmPrice;
        } 
        console.log(discount);
        }

