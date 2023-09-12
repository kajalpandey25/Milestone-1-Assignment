let first_student_mark = [200, 4, 6, 8];
let second_student_mark = [20, 4, 6, 8];
let third_student_mark = [2, 40, 6, 8];
let fourth_student_mark = [2, 40, 6, 80];
let fifth_student_mark = [2, 40, 60, 8];


let first_student_total_mark = 0;
for(let i = 0; i < first_student_mark.length; i++) {
    first_student_total_mark+=first_student_mark[i];
}


let second_student_total_mark = 0;
for(let j = 0; j < second_student_mark.length; j++) {
    second_student_total_mark+=second_student_mark[j];
}

let third_student_total_mark = 0;
for(let k = 0; k < third_student_mark.length; k++) {
    third_student_total_mark+=third_student_mark[k];
}

let fourth_student_total_mark = 0;
for(let k = 0; k < fourth_student_mark.length; k++) {
    fourth_student_total_mark+=fourth_student_mark[k];
}

let fifth_student_total_mark = 0;
for(let k = 0; k < fifth_student_mark.length; k++) {
    fifth_student_total_mark+=fifth_student_mark[k];
}

console.log(first_student_total_mark, second_student_total_mark, third_student_total_mark, fourth_student_total_mark, fifth_student_total_mark);



(first_student_total_mark > second_student_total_mark && first_student_total_mark > third_student_total_mark && first_student_total_mark > third_student_total_mark && first_student_total_mark > fourth_student_total_mark && first_student_total_mark > fifth_student_total_mark)? console.log("first student mark is" + first_student_total_mark +"highest"): (second_student_total_mark > first_student_total_mark && second_student_total_mark > third_student_total_mark && second_student_total_mark > fourth_student_total_mark && second_student_total_mark > fifth_student_total_mark)? console.log("second student mark is" + second_student_total_mark +"highest"):(third_student_total_mark > first_student_total_mark && third_student_total_mark > second_student_total_mark && third_student_total_mark > fourth_student_total_mark && third_student_total_mark > fifth_student_total_mark)? console.log("third student mark is" + third_student_total_mark +"highest"):(fourth_student_total_mark > first_student_total_mark && fourth_student_total_mark > second_student_total_mark && fourth_student_total_mark > third_student_total_mark && fourth_student_total_mark > fifth_student_total_mark)? console.log("fourth student mark is" + fourth_student_total_mark +"highest"): console.log("fourth student mark is" + fifth_student_total_mark +"highest" + "highest");
