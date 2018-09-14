// First
console.log ("مرحبا أيها العالم"); // Arabic
console.log ("Hallo Wereld"); // Dutch
console.log ("Γειά σου Κόσμε"); //Greek
console.log ("Bonjour le monde"); //French
console.log ("สวัสดีชาวโลก") ; // Thai
console.log ("Salut Lume"); // Romanian

// Second
console.log('I\'m awesome'); //or
console.log("I'm awesome");

//Third
let x;
console.log("The value of my variable x will be : undefined");
console.log(x);
x=6;
console.log("The value of my variable x will be Number and it is: 6");
console.log(x);

//Fourth
let y = "my sting" ;
console.log("the value of my string will be string and it is : my string ");
console.log(y);
 y = "my new string" ;
console.log("the value of my string will be string and it is : my new string ");
console.log(y);

//Fifth
let z , a , storedValue ;
 z = 7.25;
console.log(z);
 a = Math.round(z);
console.log(a);
if (z > a) {
    storedValue = z;
}
else { storedValue = a };
console.log(storedValue);

//sixth
let emptyArray = [];
console.log("the value of my Array will be: undefined ");
console.log(emptyArray);
let myFavoriteAnimals = ["dogs" , "cats" , "fishs" ];
console.log(myFavoriteAnimals);
myFavoriteAnimals.push("baby pig");
console.log(myFavoriteAnimals);

//Seventh
let  myString = "This is a test";
console.log(myString);
let myStringLength = myString.length;
console.log(myStringLength);

//eighth
let qNum=7 ;
console.log("The value of my variable qNum is: " + qNum);
let currentUsers = ["sam" , "john" , "sara"] ;
console.log("The value of my variable currentUsers is: " + currentUsers);
let available = true ;
console.log("The value of my variable available is: " + available);
let score = "you are the winner";
console.log("The value of my variable score is: " + score);

console.log(" the types of my variables are number, object, boolean and string");

console.log("The type of variable qNum is: " + typeof(qNum));
console.log("The type of variable currentUsers is: " + typeof(currentUsers));
console.log("The type of variable available is: " + typeof(available));
console.log("The type of variable score is: " + typeof(score));

if (typeof(qNum)===typeof(currentUsers)) {
   console.log("same type");
}
else{
    console.log("diffrent type");
}
if (typeof(qNum)===typeof(available)) {
    console.log("same type");
 }
 else{
     console.log("diffrent type");
 }
 if (typeof(qNum)===typeof(score)) {
    console.log("same type");
 }
 else{
     console.log("diffrent type");
 }
 if (typeof(currentUsers)===typeof(available)) {
    console.log("same type");
 }
 else{
     console.log("diffrent type");
 }
 if (typeof(currentUsers)===typeof(score)) {
    console.log("same type");
 }
 else{
     console.log("diffrent type");
 }
 if (typeof(available)===typeof(score)) {
    console.log("same type");
 }
 else{
     console.log("diffrent type");
 }

 //ninth

let xx = 7;
xx %= 3;
console.log(" The value of xx is 1");
console.log(xx);

let aa = 200;
aa %= 4;
console.log(" The value of aa is 0");
console.log(aa);

let bb = 47;
bb %= 5;
console.log(" The value of bb is 2");
console.log(bb);
 
let cc = 69;
cc %= 13;
console.log(" The value of cc is 4");
console.log(cc);

//tenth
let mineArray = ["Hiba" , 30 , true ];

if(6/0 === 10/0){
    console.log("yes we can compare infinities");
}else{
    console.log("no we can not compare infinities");
}

console.log("I can do it maybe i have some errors but i will keep practicing");
