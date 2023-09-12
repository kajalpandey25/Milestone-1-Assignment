
// var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';

function tempreature(celcuis) {
    let ctemp = celcuis
    let convert=  ctemp * 9 / 5 + 32;
    console.log(`${ctemp} \xB0C is to ${convert} \xB0F`);
}

tempreature(100);