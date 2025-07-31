setTimeout(()=>{
    console.log("serve water");
},5000);

setTimeout(()=>{
    console.log("Serve Soup");
},2000);

setTimeout(()=>{
    console.log("Serve Drinks");
},1000);

setTimeout(()=>{
    console.log("Serve Dinner");
},2400);

setTimeout(()=>{
    console.log("Pay Bill and Checkout");
},1000)

function serveWater(callback){
    console.log("Serving water to the group");
    setTimeout(callback,1000);
}

function serveSoup(callback){
    console.log("Serving soup to the group");
    setTimeout(callback,1000);
}

function serveStarters(callback){
    console.log("Serving Starter to the group");
    setTimeout(callback,1000);
}

function serveDrinks(callback){
    console.log("Serving Drinks to the group");
    setTimeout(callback,6000);
}

function serveDinner(callback){
    console.log("Serving Dinner to the Group");
    setTimeout(callback,1000);
}

function payBill(){
    console.log("Paying the Bill & Out of the Hotel");
}

console.log("STARTED A DAY");

serveWater(()=>{
    serveSoup(()=>{
        serveStarters(()=>{
            serveDrinks(()=>{
                serveDinner(()=>{
                    payBill();
                })
            })
        })
    })
})

console.log("END OF THE DAY");


//Higher Order Function

arr1 = [2, 4, 6, 8, 10];
arr2 = [1, 3, 5, 7, 19];

const calculatediff = function(x, y){
    let out = [];
    for(let i=0; i<y.length; i++){
        out.push(x[i] - y[i]);
    }
    return out;
}
console.log(calculatediff(arr1, arr2));


const halfData = function(val){
    return val / 2;
}
const calculateHalf = function(val, fun){
    let out = [];
    for(let i=0; i<val.length; i++){
        out.push(fun(val[i]));
    }
    return out;
}

const val1 = [10, 20, 30, 40, 50];
const val2 = [100, 200, 300, 400, 500];
console.log(calculateHalf(val2, halfData));


function double(x){
    return x * x;
}

arr1 = [10, 20, 30, 40, 50];
const out = arr1.map(double);
console.log(out);

Array.prototype.calculate = function (logic){
    let output = [];
    for (let i=0; i<this.length; i++){
        output.push(logic(this[i]));
    }
    return output;
} 

const arr1 = [1,2,3,4]
const arr2 = [4,3,2,1]
const output1 = arr1.calculate(double);
console.log(output1);

const output2 = arr2.calculate(double);
console.log(output2);



function double(x){
    return x * 2;
}
function triple(x){
    return x * 3;
}
function square(x){
    return x * x;
}
function cube(x){
    return x * x * x;
}
function increment(x){
    return x + 1;
}

//Higher order function using 3 functions :

function hof3(f1, f2, f3) {
  return function(x) {
    return f1(f2(f3(x)));
  };
}

//Higher order function using 5 functions :

function hof5(f1, f2, f3, f4, f5) {
  return function(x) {
    return f1(f2(f3(f4(f5(x)))));
  };
}

const ans = hof5(double, square, increment, cube, triple);
console.log(ans(2));
