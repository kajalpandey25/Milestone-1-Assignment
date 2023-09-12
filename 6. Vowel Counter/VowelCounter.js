let name1 ="Kajal";
let count = 0;

name1.toLowerCase();
for(let i = 0; i < name1.length; i++) {
       if((name1[i]==="a") || (name1[i]==="e") || (name1[i]==="i") || (name1[i]==="o") || (name1[i]==="u") || (name1[i]==="A") || (name1[i]==="E") || (name1[i]==="I") || (name1[i]==="O") || (name1[i]==="U")) {
        count++;
       }
}
console.log(`In the ${name1} vowel count is ${count}`);
console.log(count);