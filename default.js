function add(num1, num2 /*num2=0(or defined any value)*/) {
    if (num2==undefined) {
        num2 = 0; // or declare num2 = num2 || 765;
    }
    return num1 + num2;
}

const total = add(87, 78);
console.log(total);
console.log(add(67)); // num2 undefined