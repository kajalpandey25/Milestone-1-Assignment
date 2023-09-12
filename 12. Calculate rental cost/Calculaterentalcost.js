
function cost(days, car) {
    let Economy = 4000;
    let  Midsizq = 10000;
    let  Luxury = 20000;
    if(car === "Economy") {
        console.log(`Total rental cast ${Economy * days} of ${car} car`);
    }
    else if (car === "Midsizq") {
       console.log(`Total rental cast ${Midsizq * days} of ${car} car` );
    }
    else {
        console.log(`Total rental cast ${Luxury * days} of ${car} car`);
    }
}

cost(3, "Economy");