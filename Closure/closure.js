/**
 * Author : Manish Vitkar
 * Closure : Closure is a javascript term that indicates that variables are bound to a function's
*            scope and not the parent function scopes. When we execute a asynchronous callback,
*            the parent function's scope may have changed ; when interating through a list and altering
*            values in each iteration 
  Usage : Closure are a solution to a problem faced in asynchronous callback function , when accessing the variables
*          of this parent-function inside it in async execution , As callback are registered on event queque and take time for
*          exceution till then the execution of the code goes ahead which may have code to alter the values
*          of these varaiables , so while the callback is started to execute the variable might have change
*          so to aviod these we should not use the variable from the parent scope(parent function) instead declare
*          a closure function inside parent function.
 */
var cars = ['Ferrari','Bugatti','Porsche'];

function logCar(message,callbackFunction) {
  process.nextTick(()=> {
    callbackFunction(message);
  })
}

for (var key in cars) {
  var message = "Saw a " + cars[key];
  logCar(message,() => {
    console.log('Normal Callback :' + message);
  });
}

for (var key in cars) {
  var message = "Saw a " + cars[key];
  (function (message) {
    logCar(message,() => {
      console.log('Closure Callback :' + message);
    });
  })(message);
  
}

