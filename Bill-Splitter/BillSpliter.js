// Take an input from user
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("\n~~~ Welcome to Bill Splitter ~~~\n");

readline.question("Enter the bill amount: ", bill => {
    readline.question("Enter the tip percentage: ", tipPercentage => {
        readline.question("Enter the no. of people: ", people => {
            // Calculate the tip
            const tip = (tipPercentage/100) + 1;

            // Calculate the total bill
            const totalBill = tip * bill;

            // Calculate the bill per person
            calculateBill = (totalBill / people).toFixed(2);

            // Print the bill per person
            console.log(`\nYour total bill amount is Rs. ${totalBill}/-`);
            console.log(`Every person has to pay Rs. ${calculateBill}/-\n`);

            // Close the readline
            readline.close();
        });
    });
});


