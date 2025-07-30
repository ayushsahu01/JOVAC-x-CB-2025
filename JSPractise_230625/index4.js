// PROMISE CREATE AND CALLING

// const ayushAssignment = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log("I am Ayush ! My Work is Done !!!");
//     },5000);
// });

// function anujTask(){
//     const ayushDocs = ayushAssignment;
//     console.log("DATA", ayushAssignment);
//     console.log("BYE")
// }
// anujTask();

// ANOTHER EXAMPLE WITHOUT PROMISE


// const ayushAssignment = function(){
//     setTimeout(()=>{
//         console.log("MY WORK DONE");
//         return "BY"
//     },5000)
    
// }

// function anujTask(){
//     const data = ayushAssignment;
//     console.log("DATA",data);

// }

// anujTask();

// ASYNC AWAIT EXAMPLE

// console.log("CLASS STARTED");

// const projectSubmissionByAyush = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log("Ayush STARTED WORK")
//         resolve("I am Ayush ! My Work is Done !!!");
//     },5000);
// });

// console.log("Lunch Time");

// async function projectEvaluation(){
//     console.log("ATTENDANCE");
//     const projectFile = await projectSubmissionByAyush;
//     console.log("DATA", projectFile);
//     console.log("Project File Check");
// }

// projectEvaluation();

// console.log("Class End!!")


// console.log("Class Start");

// const projectSubmissionByAyush = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         // console.log("I have Completed the Project");
//         resolve("WORK DONE BY Ayush");
//     },5000)
// });

//  function projectEvaluation(){
//     const fileOfAyush = projectSubmissionByAyush;
//     console.log("FILE RECEIVED AND CHECKED!!!", fileOfAyush);
//     console.log("Class End")
// }

// projectEvaluation();

// console.log("I AM OUTSIDE ASYNC FUNCTION, WHICH WILL BE NOT AFFECTED BY ANY ASYNC FUNCTION");


/// WORKING EXAMPLE IN PROJECTS

// async function fetchProductData(){
//     const response = await fetch('https://dummyjson.com/products');
//     const data = response;
//     console.log(data);
// }

// fetchProductData();


// console.log("Class start");

// const projectSubmission = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     console.log("Project submitted");
    //     resolve("Project submission successful");
    // }, 5000);
// });

// async function projectEvalution() {
//     const file = await projectSubmission;
//     console.log("Project evaluated", file);
//     console.log("Class end");
// }


// const data = fetch('https://dummyjson.com/products')
//     .then(res => res.json())
//     .then(data => console.log(data));


// console.log("START");
// async function getProducts(){
//     try{
//         const res = await fetch('https://dummyjson.com/products');
//         const resData = await res.json();
//         console.log(resData);
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// console.log("END");

// getProducts();


//call()


// function admissionProcess(greet, fees){
//     console.log(greet + this.name + fees);
// }

// const student = {name: "Ayush"}
// const student2 = {name: "Anuj"}

// // admissionProcess("Hello Ayush", "1 Kidney");

// admissionProcess.call(student,"Hello, ", " Your Fees: 2 Lacs");
// admissionProcess.call(student2,"Hello, ", " Your Fees: 5 Lacs");


//apply()


// function admissionProcess(greet, fees){
//     console.log(greet + this.name + fees);
// }

// const student = {name: "Ayush"}
// const student2 = {name: "Anuj"}

// // admissionProcess("Hello Ayush", "1 Kidney");

// admissionProcess.apply(student,["Hello, ", " Your Fees: 2 Lacs"]);
// admissionProcess.apply(student2,["Hello, ", " Your Fees: 5 Lacs"]);



// bind()

// function admissionProcess(greet, fees){
//     console.log(greet + this.name + fees);
// }

// const student = {name: "Ayush"}
// const student2 = {name: "Anuj"}

// // admissionProcess("Hello Ayush", "1 Kidney");

// const studentData1 = admissionProcess.bind(student,"Hello, ", " Your Fees: 2 Lacs");
// const studentData2 = admissionProcess.bind(student2,"Hello, ", " Your Fees: 5 Lacs");

// studentData1();
// studentData2();


//CURRYING IN JS

//NORMAL APPROACH

// function sumOfAll(a,b,c){
//     return a+b+c;
// }

// console.log(sumOfAll(10,20,30));

// CURRYING APPPROACH

// function firstNumber(a){
//     return function (b){
//         return function (c){
//             return a+b+c;
//         }
//     }
// }

// console.log(firstNumber(5,10,20))
// console.log(firstNumber(10(20(30))))

// console.log(firstNumber(5)(10)(20));

// const answer = firstNumber(5)
// const answer2 = answer(20)

// console.log(answer2(30))


// Subway Order

// function chooseBread(bread){
//     return function(patty){
//         return function (cheese){
//             return `Your Bread: ${bread}, Your Patty: ${patty}, " Cheese: ${cheese}`;
//         }
//     }
// }

// console.log(chooseBread("Multigrain")("Paneer")("With Cheese"));


// EVENT CAPTURING AND EVENT BUBBLING


const grandparent = document.getElementById('grandparent');
const parent =  document.getElementById('parent');
const child = document.getElementById("child");


//ADD EVENT LISTENERS

grandparent.addEventListener('click',()=>{
    console.log("GRANDPARENT DIV CLICKED");
},false);

parent.addEventListener("click",()=>{
    console.log("PARENT DIV CLICKED");
},true);

child.addEventListener("click",(event)=>{
    console.log("CHILD DIV IS CLICKED");
},false);



//only touch one time;

// const grandparent = document.getElementById('grandparent');
// const parent =  document.getElementById('parent');
// const child = document.getElementById("child");

// grandparent.addEventListener('click',(event)=>{
//     console.log("GRANDPARENT DIV CLICKED");
//     event.stopPropagation();
// },false);

// parent.addEventListener("click",(event)=>{
//     console.log("PARENT DIV CLICKED");
//     event.stopPropagation();
// },false);

// child.addEventListener("click",(event)=>{
//     console.log("CHILD DIV IS CLICKED");
//     event.stopPropagation();
// },false);