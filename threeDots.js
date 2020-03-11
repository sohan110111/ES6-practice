const ages = [10, 20];
const ages2 = [30, 40, 50, 60];
const ages3 = [80, 90, 100];
const concatenate1 = ages.concat(ages2).concat(ages3);
console.log(concatenate1);
const concatenate2 = concatenate1.concat([420]);
console.log(concatenate2);

// const check = [ages, ages2, 70, ages3];
// console.log(check);
// now using spread operator ...
const useSpread = [...ages, ...ages2, 70, ...ages3];
console.log(useSpread);

// const maximum = Math.max(10, 20, 30);
// console.log(maximum);

const maxCheck = [10, 20, 30, 40, 100, 50, 90];
const maximumNumber = Math.max(...maxCheck);
console.log(maximumNumber);


