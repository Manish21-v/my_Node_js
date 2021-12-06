/**Author : Manish
 * Note : There are three types of Timers : timeout, interval and immediate
 */


/**
 * SetTimeout(callback,'delay in millisceonds',[args]) : 
 * This function returns a timer Object ID, you can pass this ID to clearTimeout(timeoutID)
 * before the delayMillisecond expires to cancel the timeout function
 */
setTimeout(()=> {
  console.log('Timeout function is executed');
},'2000');

var fs = require ("fs");

fs.stat("nexttick.js",function() { // I/O operation
  console.log("nexttick.js Exists");
});

setImmediate(() => {
  console.log("Immediate Timer 1 Executed");
})

setImmediate(() => {
  console.log("Immediate Timer 2 Executed");
})

process.nextTick(() => {
  console.log("Next Tick 1 Executed");
});

process.nextTick(() => {
  console.log("Next Tick 2 Executed");
});