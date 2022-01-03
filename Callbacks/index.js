/**
 * Lets Learn About CALLBACK functions
 * Author : Manish Vitkar
 * Definition : A callback also know as a call-after function is any executable code that
 *  is passed as an argument to other code ; That other code is execpted to callback(execute)
 *  the argument at a given time.
 */

function calculate(num1, num2, callbackFunction) {
  return callbackFunction(num1, num2);
}

function calcProduct(num1, num2) {
  return num1 * num2;
}

function calcSum(num1, num2) {
  return num1 + num2;
}

//calling a callback function
// Do not write calcproduct() bcoz it becomes
// a function call itself and we want to assign a function not to call a function here
console.log(calculate(11,12,calcProduct)); 
console.log(calculate(11,12,calcSum));