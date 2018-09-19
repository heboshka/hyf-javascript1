//1
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
myString = myString.replace(/,/g, " ");
console.log(myString);

//2
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
favoriteAnimals.splice(1, 0, 'meerkat');
console.log("I think the new value of Array is :['blowfish', 'meerkat', capricorn', 'giraffe', 'turtle']");
console.log(favoriteAnimals);
console.log("The array has a length of: " + favoriteAnimals.length);
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
let meerkatIndex = favoriteAnimals.indexOf('meerkat');
console.log("The item you are looking for is at index: " + meerkatIndex);

//3 More JavaScript
//3.1
function sumCalculator(q, w, e) {
  return q + w + e;
}
console.log(sumCalculator(2, 15, 265));
//3.2
function colorCar(colorName) {
  console.log("a " + colorName + " car");
}
colorCar("black");

//3.3
let user = { name: "sara", age: "25", status: true };
function userScore(user) {
  console.log(user); 
}
userScore(user);

//3.4
function vehicleType(vehicleColor, vehicleCode) {
  if (vehicleCode === 1) {
    console.log('a ' + vehicleColor + " car");
  } else if (vehicleCode === 2) {
    console.log('a ' + vehicleColor + " motorbike");
  } else {
    console.log('wrong code, please enter 1 or 2 ');
  }
}
vehicleType('red', 2);
vehicleType('black', 1);
vehicleType('green', 5);

//3.5
console.log(3 === 3 ? "yes" : "no");

//3.6
function vehicleEdited(vColor, vCode, vAge) {
  if (vCode < 1 || vCode > 2) {
    console.log('wrong code, please enter 1 or 2 ');
  } else {
    const code = (vCode === 1) ? "car" : "motorbike";
    const age = (vAge === 1) ? "new" : "used";
    console.log(`a ${vColor} ${age} ${code}`);
  }
}
vehicleEdited('red', 1, 5);
vehicleEdited('green', 2, 1);

//3.7
let vehicleList = ['motorbike', 'car', 'track', 'bike', 'bus'];

//3.8
console.log(vehicleList[2]);

//3.9
function vehicle(vColor, vCode, vAge) {
  if (vCode <= vehicleList.length) {
    const vehicle = vehicleList[vCode - 1]
    const age = (vAge === 1) ? "new" : "used"
    console.log(`a ${vColor} ${age} ${vehicle}`)
  } else {
    console.log('cannot recognize your vehicle code');
  }
}
vehicle("green", 3, 1);

//3.10
function advertisement(vehicleList) {
  let advertisement = "Amazing Joe's Garage, we service: ";
  for (let i = 0; i < vehicleList.length; i++) {
    advertisement += vehicleList[i] + "s, ";
  }
  advertisement = advertisement.slice(0, -2) + ".";
  console.log(advertisement);
}
//3.11
vehicleList.push('sedan');
console.log(vehicleList);
advertisement(vehicleList);


//3.12
let myObject = {};
//3.13
let myTeachers = { ivana: "", unmesh: "", Arco: "", jim: "" };
console.log(myTeachers);

//3.14
myTeachers.ivana = "HTML&CSS";
myTeachers.unmesh = "CLI";
myTeachers.Arco = "Github";
myTeachers.jim = "JS";
console.log(myTeachers);

//3.15
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
console.log(x == y ? "yes" : "no"); //no
console.log(x === y ? "yes" : "no"); //no
console.log(x == z ? "yes" : "no"); // no
console.log(y == z ? "yes" : "no"); //yes

//3.16
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;
console.log(o1);
console.log(o2);
console.log(o3);
o1.foo = "hello";
o2.foo = "world";
console.log(o1);
console.log(o2);
console.log(o3); // changing o2 changes o3  but changing o1 does not change o3
// let o3;
//o2 = o3; o2 is undefined


//3.17
let bar = 42;
typeof typeof bar;
console.log(typeof typeof bar); // string because it is take the type word 'number' which is the type of bar

