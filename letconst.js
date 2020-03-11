

const friendName = "Habib";
// friendName = "Masud"; const not changeable
console.log (friendName);

const arrayElement = [7, 8 , 9, 12];
arrayElement.pop();
arrayElement.push(13);
arrayElement[0] = 87;
// arrayElement = [7, 7, 8, 8]; not changeable
console.log(arrayElement);

const arrayDeclare = {name:"Murad", phoneNo:"87654"};
//arrayDeclare[0] = name : "Tabib";
//arrayDeclare.push(87654);
//arrayDeclare.pop();
console.log(arrayDeclare);

let patientName = "Kobir";
console.log(patientName);
patientName = "Shahed"; // let changeable
console.log(patientName);


let sum = 0;
for(let i = 0; i < 10; i++) {
    sum = sum + i;
}
//console.log(i); not accessible because 
console.log(sum);