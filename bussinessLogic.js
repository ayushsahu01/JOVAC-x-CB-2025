//Build business logic, object of data=20 (use map, filter and reduce).

const users = [
    {
        firstName : "Ayush",
        lastName : "Sahu",
        age : 20,
        weight : 55,
        height : 5.11
    },
    {
        firstName : "Piyush",
        lastName : "Sahu",
        age : 18,
        weight : 50, 
        height : 5.9 
    },
    {
        firstName : "Rajesh",
        lastName : "Sahu",
        age : 43,
        weight : 68,
        height : 5.9 
    },
    {
        firstName : "Ritik",
        lastName : "Sahu",
        age : 24,
        weight : 70,
        height : 5.9
    },
    {
        firstName : "Anshul",
        lastName : "Sahu",
        age : 17,
        weight : 58,
        height : 5.6
    },
    {
        firstName : "Anuj",
        lastName : "Agarwal",
        age : 19,
        weight : 56,
        height : 5.9
    },
    {
        firstName : "Adarsh",
        lastName : "Dubey",
        age : 19,
        weight : 51,
        height : 5.10
    },
    {
        firstName : "Akash",
        lastName : "Agarwal",
        age : 20,
        weight : 72,
        height : 5.10
    },
    {
        firstName : "Karan",
        lastName : "Gupta",
        age : 20,
        weight : 58,
        height : 5.10
    },
    {
        firstName : "Harshit",
        lastName : "Maheshwari",
        age : 20,
        weight : 56,
        height : 5.5
    },
    {
        firstName : "Kavya",
        lastName : "Agarwal",
        age : 20,
        weight : 58,
        height : 5.8
    },
    {
        firstName : "Ayushi",
        lastName : "Sharma",
        age : 21,
        weight : 75,
        height : 5.10
    }
];

//Printing Names
const out1 = users.map(user => user.firstName + " " + user.lastName);
console.log(out1);


//Average age
const totalMembers = users.length;
const out2 = users.reduce(function(acc, curr){
    acc = acc + curr.age
    return acc;
},0);
console.log(out2/totalMembers);


//Using filter
const out3 = users.filter(user => user.height > 5.8).map((name) => name.height);
console.log(out3);

const out4 = users.filter(user => user.weight > 55).map((name) => name.firstName);
console.log(out4);