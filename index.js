// Variables 
// console.log("Hello World");
// console.log("IUB")
// console.log(5 + "5")
// Data types --> String, number, float, boolean --> true or false null undefined
// var, let, const 
// var a = 5;
// let b = "IUB";
// const _iub = "University in BWP"
// console.log(a);
// console.log(b);
// console.log(_iub);
// var a = 10;
// var a = 15;
// console.log(a);
// let a = "IUB";
// a = "Kfueit";
// console.log(a);
// const a = 15;
// a = 10;
// console.log(a);
// const a = 5;
//  How to check data type
// const b = Number(a)
// const b = String(a);
// console.log(typeof(b));
// 13-03-2024
// String Methods
// const a = "iub";
// const b = a.toLowerCase();
// const b = a.toUpperCase()
// const b = a.trim()
// const b = a.split("");
// const b = a.concat(5)
// const b = a.length
// const b = a[1]
// console.log(b);

// Arithmatic +, -, *, /
// const a = 10;
// const b = 10;
// const sum = a+b
// console.log(sum);
// let a = 10;
// ++a
// --a
// console.log(a);
// comparison opreator 
//  >, <, >=, <= , == , ===
// Assignment Opreator 
// +=, -=, *=, /=
// let a = 5;
// const b = a
// a += 5
// console.log(a);
// Logical Opreators 
//  &&, ||, !
// const a = 10
// const b = 10
// const c = 8
// console.log(a === b && b === c);
// console.log(a != b);
// 16-03-2024
// Conditional Statement

// const a = prompt("Enter anything");

// if (a === "3"){
//    console.log("Hello");
// }
// else if (a === "4"){
//     console.log("Hello 4");
// }
// else if (a === "Me"){
//     console.log("Hello World");
// }
// else {
//     console.log("Hi");
// }

// const userNumber = prompt("Enter any number")
// const even = userNumber%2

// if (even == 0  ){
//     console.log("The number is even");
// }
// else {
//     console.log("The number is odd");
// }

// const a = true;

// a? console.log("True"): console.log("False");
// const a = (10 < 0 )? console.log("a is greater"): console.log("a is less than 10");

// const b = ("Me" === 5)? console.log("Me is  equal to 5"): console.log("Me is not equal to 5");

// const a = true;

// if (a){
//     console.log("Yes a is true");
// }
// else {while (a <= 10
//     console.log("No is a not true");
// }
// const a = true;
// !a? console.log("yes"): console.log("No");

// for loop, while loop and do while loop
// for (let i=1; i <= 10; i++){
//     console.log(`Hello World ${i}`);
// }
// let a = 1;
// ) {
//     console.log(`Hello World ${a}`);
//     a++
// }
// i = 12
// do {
//     console.log("Hello World", i);
//     i++
// }
// while (i < 10)

// const a = prompt("Enter anything")

// switch (a) {
//     case "mango" :
//         console.log("Yes this is mango");
//         break
//     case "apple" : 
//         console.log("No this is not a mango");
//         break
//     default:
//         console.log("Invalid Output");
// }
// const a = prompt("Enter your name")
// switch (a) {
//     case "umar" :
//         console.log(`Name: Umar\n Roll: 01053\n class: bsit-2nd`);
//         break
//     case "younis" : 
//         console.log(`Name: Younis, Roll: 01059, class: bsit-2nd`);
//         break
//     default:
//         console.log("Data not found");
// }


// 17-03-2024

// Arrays 
// const a = 12.34
// const myArray = [ "Younis","Jawad", "Umar",  ]
// const b = myArray[2]
// console.log(myArray);
// console.log(b);
// console.log(myArray.length);
// for (i = myArray.length; i >= 0; i--){
//     console.log(myArray[i]);
// }
// for of 
// for (elements of myArray) {
//     console.log(elements);
// }
// for in 
// for (item in myArray) {
//     console.log(myArray[item]);
// }
// const b = myArray.push("Laptop")
// const b = myArray.pop();
// const d = myArray.shift();
// const b = myArray.unshift(30)
// console.log(myArray);
// const b = myArray.slice(2,5)
// const b = myArray.splice(2,1)
// console.log(b);
// const b = myArray.concat("IUB")
// const newArray = ["Jawad", "Younis", "Umar", ...myArray]
// const b = myArray.sort()
// const b = myArray.reverse()
// const b = myArray.indexOf("Younis")
// console.log(b);

//  18-03-2024
// Multi Dimensional Arrays 

// const multiArray = [true, false, "Umar", [1,2,3, "Khan"], "Younis", [true, false, ["Laptop", "iub"]]];

// console.log(multiArray);

// const b = multiArray[5][2][1]
// console.log(b);
// 28/03/2024
// const arr = ["Apple", true, false, "IUB", 56];
// console.log(arr[1])
// const a = arr[1];
// Destructure 
// const [fruit, b, c, d] = arr
// console.log(fruit);

// const user = {
//     name: "Younis",
//     username: "younis1234",
//     password: "",
//     age: "19",
//     uni: "IUB"
// }
// user.name = "Umar";
// console.log(user.name);
// const myArray = [
//     {
//         name: "Umar",
//         roll: "1053"
//     },
//     {
//         name: "Younis",
//         roll: "1059"
//     },
//     {
//         name: "Jawad",
//         roll: "1003"
//     },
// ]
// console.table(user);
// const a = 5;
// const b = 10;
// const value = {
//     a,
//     b
// }
// console.log(value.b);
// const name = user.name
// console.log(user.username);
// console.log(name);
// console.log(myArray);

// for (data of myArray) {
//     console.log(data.name);
//     console.log(data.roll);
// }
// console.log(Object.keys(user));
// console.log(Object.values(user));
// 29-03-2024
// Functions in JS
// Anonymous Function 

// function greet() {
//     console.log("Good Afternoon");
// }
// const myArray = ["IUB", true,false, null]
// function greet() {
//     // const a = Number(prompt("Enter  any number"));
//     // const b = 20;
//     // console.log(a+b);
//     for (items of myArray) {
//         console.log(items);
//     }
// }
// greet();
// greet();
// Function with parameter
// function sum(valueOfA, valueOfB, valueOfC){
//     console.log(valueOfA + valueOfB + valueOfC );
// }
// sum(10, 2, 20);
// sum(50, 10, 40)
// function sum(...arr){
//     console.log(arr);
// }
// sum([12,34, "IUB"], [45,4385, "Khan"])
// sum([{name: "Umar"}, {name: "Jawad"}, {name: "Younis"}] )
// Arrow 

// const sum = (name) => {
//     console.log("Hello " + name );
// }
// sum("Younis");
// sum("Umar")

// Callback Function 
// function sum(anyFunction){
//    console.log("Hello");
//    me();
// }
// function me() {
//     console.log("Bye");
// }
// sum(me)
// const myArray = [12,34, "IUB"]
// myArray.forEach((item)=> {
//     console.log("Hello" + item);
// })
// myArray.map((item)=> {
//     console.log((item));
// })
// myArray.filter((item)=> {
    // console.log(item !== "IUB");
    // const a = item === "IUB";
    // console.log(a);
// })

// 31-03-2024

// DOM --> Document object Model 
// Selectors in JavaScript
// Tag Selector 
// const tag = document.getElementsByTagName("h1");
// console.log(tag[1]);
// ID Selector 
// const id = document.getElementById("roll")
// console.log(id);
// class selector 
// const clas = document.getElementsByClassName("box")
// console.log(clas[1]);
// Query selector 

// const query = document.querySelector("h1");
// const query = document.querySelector(".box");
// const query = document.querySelector("#roll");
// const query = document.querySelectorAll("h1");
// const query1 = document.querySelectorAll("h2");
// const body = document.querySelectorAll("body")
// console.log(query[0], query[1]);
// console.log(body);
// Element Selector
// const element = document.getElementById("roll");
// const sibling = element.firstElementChild
// const sibling = element.lastElementChild;
// const sibling = element.parentElement;
// const sibling = element.previousElementSibling
// const sibling = element.nextElementSibling;
// console.log(sibling);
// Changin Inner Text or HTML

// const h1 = document.getElementsByTagName("h1")[0];
// console.log(h1);
// h1.innerText = "This is new text"
// h1.innerHTML = `<table border = "1" > <tr> <th> This is th </th> </tr> </table>`
// h1.outerHTML = `<table border = "1" > <tr> <th> This is th </th> </tr> </table>`


// 04-05-2024

// const h1Seclect = document.getElementsByTagName("h1")[0];
// Style
// h1Seclect.style.backgroundColor = "red"
// h1Seclect.style.color = "white"
// h1Seclect.style.display = "none"
// console.log(h1Seclect);
// Attribute
// const a = h1Seclect.hasAttribute("class");
// const a = h1Seclect.getAttribute("class")
// const a = h1Seclect.setAttribute("id", "container")
// console.log(a);
// Classes
// h1Seclect.classList.add("me")
// h1Seclect.classList.remove("me")
// h1Seclect.classList.remove("box")


// Events

const btnSelect = document.getElementsByTagName("button")[0]
const input1 = document.getElementsByTagName("input")[0]
const input2 = document.getElementsByTagName("input")[1]
const divSelect = document.getElementsByTagName("div")[0]
const h1Seclect = document.getElementsByTagName("h1")[0]
// btnSelect.addEventListener("click", function calculate() {

// })

btnSelect.addEventListener("click", ()=> {
    // const div = document.createElement("div")
    // div.innerHTML = `<h1>${Number(input1.value) + Number(input2.value)} </h1>`
    // document.getElementsByTagName("div")[0].append(div)
    h1Seclect.style.color = "white"
    h1Seclect.style.backgroundColor = "green"
    h1Seclect.style.display = "none"
    divSelect.innerHTML = `<h1>
    <span> Calculation is: </span>
    ${Number(input1.value) + Number(input2.value)} </h1>`

    const h2Seclect = document.getElementsByTagName("h1")[1]
    h2Seclect.style.color = "pink"
    input1.value = ""
    input2.value = ""

})
