//Q1

let arr1 = [10, 20, 30];
let arr2 = [40, 50];

let combined = [...arr1, ...arr2]

console.log(combined);


//Q2

let person = { name: "Venu", age: 25 };
let extra = { city: "Bengaluru" };

let profile = { ...person, ...extra}

console.log(profile);


//Q3

function sumAll(...numbers){
    return numbers
}

console.log(sumAll(1, 2, 3, 4))


//Q4

let numbers = [10, 20, 30, 40, 50];

let [a, ...remaining] = numbers;
console.log(numbers);


//Q5

let user = {
  name: "Alice",
  address: {
    city: "Bengaluru",
    pin: 560001,
    geo: { lat: 11.22, lng: 77.33 }
  }
};

