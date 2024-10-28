// Write a for loop that prints numbers from 1 to 10.

for(let i = 1;  i < 11; i++){
    console.log(i)
}

// How would you create a for loop that prints all even numbers between 0 and 20?

for(let i = 0; i <= 20; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}

// Write a for loop that iterates over an array of names, printing each name to the console.

const userNames = ["Alex", "Brian", "Charlie", "Derrick", "Eric"];

for(let i = 0; i < userNames.length; i++){
    console.log(userNames[i])
}

// How would you write a for loop to calculate and print the sum of all elements in the array?

const numbers = [1,2,3,4,5];

let sum = 0;

for(let i = 0; i < numbers.length; i++){
    sum = sum + i;
}
console.log(sum)