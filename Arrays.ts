const namesofstudent : string[] = [];
namesofstudent.push("Gopi")
namesofstudent.push("Harsh")
console.log(namesofstudent)
namesofstudent.pop();
console.log(namesofstudent)

const numbers =[1,2,3];
numbers.push(4);
console.log(numbers)

const names :readonly  string[] = ["Gopi"];
//names.push   shows error..
console.log(namesofstudent)
namesofstudent.pop();
console.log(namesofstudent)