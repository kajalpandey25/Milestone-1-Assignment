// let arr1 = [50, 39, 40, 30, 20, 70, 60, 33];
// let arr1 = [33, 66, 99, 117, 126, 162];
let arr1 = [99, 107, 20, 33]

for(let i = 0; i <=arr1.length; i++) {
    if(arr1[i]%2!==0 && arr1[i]%3===0) {
        console.log(arr1[i]);
        continue;
    }
}