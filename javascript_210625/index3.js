// let arr = [5, 4, 3, 8, 12, 72];
// function maxofArr(arr){
//     let max = 0;
//     for(let i=0; i<arr.length; i++){
//         if(max < arr[i]){
//             max = arr[i];
//         }
//     }
//     return max;
// }

// console.log(maxofArr(arr));

// // Using REDUCE
// const ans = arr.reduce(function(acc, curr){
//     if(acc < curr){
//         acc = curr;
//     }
//     return acc;
// },0);

// console.log(ans);

// // Reduce :

// const arr =[5,1,2,7,4]

// let ans =0;

// for (let i =0;i<arr.length;i++){
//     ans+=arr[i];
// }

// console.log(ans);

// function sumOfArr(arr){
//     let sum =0;
//     for (let i =0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return sum;
// }

// let arr = [4,6,2,3,1]
// console.log(sumOfArr(arr));


// //REDUCE SYNTAX

// let arr = [4,6,2,3,1]

// const output = arr.reduce(function(acc,curr){
//     acc = acc+curr;
//     return acc;
// },0)

// console.log(output);


// const output = arr.reduce(function(acc,curr){
//     if(curr>acc){
//         acc=curr;
//     }
//     return acc;
// },0)

// console.log(output);


// Object:

// const users = [
//     {
//         firstName: "Ayush",
//         lastName: "Sahu",
//         age: 25
//     },
//     {
//         firstName: "Anuj",
//         lastName: "AGarwal",
//         age: 19
//     },
//     {
//         firstName: "Adarsh",
//         lastName: "Dubey",
//         age: 20
    
//     },
//     {
//         firstName: "Piyush",
//         lastName: "Sahu",
//         age: 18
    
//     },
//     {
//         firstName: "Karan",
//         lastName: "Gupta",
//         age: 22
    
//     }
// ]

// const output = users.map(user => user.firstName + " " + user.lastName);

// console.log(output);
// console.log(output[0]);


//Average age of users:

// const output2 = users.reduce(function(acc,curr){
//     acc = acc+curr.age
//     return acc
// },0)

// console.log(output2);

// const outputFilter = users.filter(user => user.age <20).map((namee)=> namee.lastName);

// console.log(outputFilter);

// const finalResult = outputFilter.map((namee)=> namee.firstName);

// console.log(finalResult);



// PROMISES

const cart =["shoes", "watches", "pants", "glasses", "deodrants", "shirt"]

//CALLBACK
createOrder(cart, function(orderId){
    proceedToPayment(orderId, function (paymentInfo){
        showOrderSummary(paymentInfo, function (){
            updateWallet();
        });
    });
});


// //Promises

createOrder(cart)
    .then(function (orderId){
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo){
        return showOrderSummary(paymentInfo);
    })
    .then(function(paymentInfo){
        return updateWalletBalance(paymentInfo);
    })


//lETS CREATE PROMISE

// function createOrder(cart){
//     let orderId = "1234"
//     console.log(orderId);
//     console.log(cart);
// }

// const promise = createOrder(cart);


// console.log(promise);

// promise.then(function (orderId){
//     console.log(orderId);
// }).catch(function (err){
//     console.log(err.message);
// })

// const myPromise = new Promise((resolve, reject) => {
//     resolve("Promise Resolved")
//   setTimeout(() => {
//     resolve("Promise Resolved");
//   }, 3000);
// });

// console.log(myPromise);

// const myPromise2 = new Promise((resolve, reject) => {
//     resolve("Promise Resolved")
//   setTimeout(() => {
//     resolve("Promise Rejected");
//   }, 3000);
// });

// console.log(myPromise2);
// myPromise2.then(function (){
//     console.log("THEN ACTIVATED")
// }).then(function (){
//     console.log("ONE MORE THEN 1")
// }).then(function (){
//     console.log("ONE MORE THEN 2")
// }).then(function (){
//     console.log("ONE MORE THEN 3")
// }).then(function (){
//     console.log("ONE MORE THEN 4")
// })
// .catch(function (err){
//     console.log(err);
// });

// //Promise Apis:

// Promise.all() 


// const p1 = new Promise(function (resolve,reject){
//     setTimeout(()=>{
//         reject("P1 reject");
//     },1000)
// });

// const p2 = new Promise(function (resolve,reject){
//     setTimeout(()=>{
//         reject("P2 reject");
//     },1000)
// });

// const p3 = new Promise(function (resolve,reject){
//     setTimeout(()=>{
//         resolve("P3 Resolve");
//     },4000)
// });

// Promise.all([p1,p2,p3])
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })


// //PROMISE . ALL SETTLED


// Promise.allSettled([p1,p2,p3])
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })


// //Promise . race 

// Promise.race([p1,p2,p3])
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })


// // PRomise . any

// Promise.any([p1,p2,p3])
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })