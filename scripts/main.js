console.log('hello world!')

let val1 = 5;

if (val1 >= 0){
    console.log("The Number is Positive");
}
else {
    console.log("The Number is Negative");
}

let val2 = 5;
if (val2 % 2 === 0) {
    console.log("This Number is Even");
}
else {
    console.log("This Number is Odd");
}

let dummy = "";

if (dummy === "") {
    console.log("The string is empty")
}
else {
    console.log("The string is " + dummy)
}

if (dummy.length > 10) {
    console.log("The string is longer than 10")
}
else {
    console.log("The string is shorter than 10")
}

let val3 = 10;

if (val3 > 5 && val3 < 15) {
    console.log("The number is between 5 and 15")
}
else {
    console.log("The number is not between 5 and 15")
}

let age = 21;
let user = "Freddy";

if (age > 18 || user === "Freddy") {
    
    console.log("Lekker boet!");
}
else {
    console.log("Nee wat chaana, voetsek!");
}

let val4 = 10;
for (let i = 0; i <= val4; i++) {
    console.log(i);
}

for (let i = 10; i >= 0; i--) {
    console.log(i);
}

let total = 0;
for (let i = 0; i <= 10; i++) {
    total += i;
}
console.log(total);

let nameArray = ["Mike", "james", "bob", "tim", "greg", "annie", "susan", "jacob"];
for (let i = 0; i < nameArray.length; i++) {
    console.log(nameArray[i]);
}

let numArray = [10, 50, 83, 54, 32, 78, 65, 100];
let total2 = 0;
for (let i = 0; i < numArray.length; i++) {
    total2 += numArray[i];
    console.log(total2);    
}
console.log(total2);

let isGreg = false;
for (let i = 0; i < nameArray.length; i++) {
    if (nameArray[i] === "greg") {
        isGreg = true;
    }
}
if (isGreg) {
    console.log("Yes, greg is on the list");
} else {
    console.log("greg is missing. commence operation saving private greg!");
}