//import { constants } from "buffer";


// function expression 
const functionExpression = function(num) { // function anyName()
    return num*2;
}
console.log(functionExpression(2));

// single parameter in arrow function
const doubleIt = num => num*2;
const result1= doubleIt(2);
console.log(result1);

// for more than one parameter 
const add = (num1, num2) => num1 + num2;
const result2 = add(78, 22);
console.log(result2);

// for empty parameter list 
const emptyParameter = () => 0000;
const result3 = emptyParameter();
console.log(result3);

// multiline in function 
const addMath = (x, y) => {
    const sum = x + y;
    const minus = x - y;
    const result = sum * minus;
    return result;
}
console.log(addMath(5,3));