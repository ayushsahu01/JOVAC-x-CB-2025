const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Data to store user inputs
let cartItem = '';
let paymentAmount = 0;

const Cart_Items = [
    {
        itemName : "Cold Drinks",
        price : 49
    },
    {
        itemName : "Pizza",
        price : 299  
    },
    {
        itemName : "Burger",
        price : 99
    },
    {
        itemName : "Bahubali Thali",
        price : 1199
    }
]
//Add Products/Cart
function addProducts(callback) {
    rl.question('Step 1: Enter the product name to add to the cart: ', (product) => {
        if (product.trim() !== '') {
            cartItem = product.trim();
            console.log(`${cartItem} added to cart.`);
            callback();
        } else {
            console.log('Invalid product name. Process stopped.');
            rl.close();
        }
    });
}

//Create Order
function createOrder(callback) {
    rl.question('Step 2: Type "create" to create the order: ', (command) => {
        if (command.trim().toLowerCase() === 'create') {
            console.log('Order created.');
            callback();
        } else {
            console.log('Invalid input. Process stopped.');
            rl.close();
        }
    });
}

//Payment
function makePayment(callback) {
    rl.question('Step 3: Enter payment amount: ', (amount) => {
        if (!isNaN(amount) && Number(amount) > 0) {
            paymentAmount = Number(amount);
            console.log(`Payment of ₹${paymentAmount} successful.`);
            callback();
        } else {
            console.log('Invalid amount. Process stopped.');
            rl.close();
        }
    });
}

//Order Summary
function orderSummary(callback) {
    rl.question('Step 4: Type "summary" to display the order summary: ', (input) => {
        if (input.trim().toLowerCase() === 'summary') {
            console.log('Order Summary:');
            console.log(`Cart Item: ${cartItem}`);
            console.log(`Payment: ₹${paymentAmount}`);
            callback();
        } else {
            console.log('Invalid input. Process stopped.');
            rl.close();
        }
    });
}

//Update Wallet
function updateWallet(callback) {
    rl.question('Step 5: Enter the new wallet balance: ', (balance) => {
        if (!isNaN(balance) && Number(balance) >= 0) {
            console.log(`Wallet updated. New Balance: ₹${balance}`);
            callback();
        } else {
            console.log('Invalid balance. Process stopped.');
            rl.close();
        }
    });
}

// Start the process
addProducts(() => {
    createOrder(() => {
        makePayment(() => {
            orderSummary(() => {
                updateWallet(() => {
                    console.log('Order Placed!, Thank You.');
                    rl.close();
                });
            });
        });
    });
});
