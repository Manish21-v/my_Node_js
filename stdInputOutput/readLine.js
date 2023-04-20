
/**
 * Method 2:
 * Use of readline module
 */

//Example of taking input number and array of numbers using process.stdin

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputNumber;
let inputArray = [];

rl.question('Enter a number: ', (number) => {
  inputNumber = parseInt(number);
  rl.question('Enter an array of numbers separated by spaces: ', (array) => {
    inputArray = array.trim().split(' ').map(Number);
    rl.close();

    console.log('Input Number:', inputNumber);
    console.log('Input Array:', inputArray);
    printPyramid(inputNumber);
  });
});

function printPyramid(size) {
  // To Print on every row
  for (let outer = 0; outer < size; outer++) {

    for (let space = size; space > outer; space--) {
      // console.log(' ');
      process.stdout.write(' ')

    }

    //To print on every column
    for (let inner = 0; inner <= outer; inner++) {
      // console.log('* ');
      process.stdout.write('* ')
    }
    console.log();
  }
}




