let arr1 = ["Khushi", "Abhi", "Sona", "Kajal", "Khushi"];
// let arr1 = [2, 4, 6, 8, 2, 4 ,6 ,10];
// let arr1 = [2, 3 ,"Rishabh", "Raunak", 2 ,3 ,"Rishabh", "Raunak"];

function removeelemant(arr1) {
   let bag = [];
   for (let i = 0; i < arr1.length; i++) {
      if(bag.indexOf(arr1[i]) === -1) {
          bag .push(arr1[i]);
       }
     }
     return bag;
}

console.log(removeelemant(arr1));