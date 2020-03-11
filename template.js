const firstName = "Linus";
const lastName = "Trovalds";
const fullName = firstName + " " + lastName;
console.log(fullName);

const fullName2 = `${firstName} ${lastName} is a Finnish-American software engineer`;
console.log(fullName2);

const useTemplate = `${89+89-7}`;
console.log(useTemplate);

// old system multiline declaration 
// const multiline = "Linus Trovalds is a creator \n" + "He is a principal developer in linux cornel";
const multiline = `He is the founder and coordinator of Linux
Git is revision control system`;
console.log(multiline);

const name = "adding name";
const useTemplateCheck = `Hello ${name}, how are you?`;
console.log(useTemplateCheck);

