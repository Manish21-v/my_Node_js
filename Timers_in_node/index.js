// /**Author : Manish
//  * Note : There are three types of Timers : timeout, interval and immediate
//  */

// /**
//  * SetTimeout(callback,'delay in millisceonds',[args]) : 
//  * Timeout timers are used to delay work for a specific amount of time. When that time
//  * expires the callback function is executed and the timer goes away.
//  * This function returns a timer Object ID, you can pass this ID to clearTimeout(timeoutID)
//  * before the delayMillisecond expires to cancel the timeout function
//  */

// /**
//  * SetInterval(callback, delayMilliSeconds,[args]) :
//  * Interval Timers are used to perform work on a regular delayed interval. When the delay 
//  * time expires , the callback function is executed and is then rescheduled for the delay 
//  * interval again.
//  */

// /**
//  * SetImmediate(callback,[args]) :
//  * Immediate timers are used to perform work on a function as soon as the I/O event callbacks
//  * are executed,but before any timeout or interval events are executed. This allows you
//  * to schedule work to be done after the current events in the event queue are completed
//  */

// /**
//  * nextTick(callback)
//  * A useful method of scheduling work on event queue is the process.nextTick(callback) function
//  * this function schedules work to be run on the next cycle of the event loop.unlike
//  * the setImmediate() method, nextTick() executes before the I/O events are fired.
//  */

// var fs = require ("fs");

// fs.stat("nexttick.js",function() { // I/O operation
//   console.log("nexttick.js Exists");
// });

// setImmediate(() => {
//   console.log("Immediate Timer 1 Executed");
// })

// setImmediate(() => {
//   console.log("Immediate Timer 2 Executed");
// })

// process.nextTick(() => {
//   console.log("Next Tick 1 Executed");
// });

// process.nextTick(() => {
//   console.log("Next Tick 2 Executed");
// });

// setTimeout(()=> {
//   console.log('Timeout function is executed');
// });

// /**
//  * Note : Order of execution
//  * Non-I/O loops : Execution order process.nextTick() > setTimeOut() > setImmediate() and other timers in non I/O loops
//  * I/O loops : Execution order process.nextTick() > setImmediate() > setTimeOut()  and other timers in non I/O loops
//  */

let moment = require('moment');

console.log(moment("2021-10-31T18:30:00.000Z", "YYYY-MM-DD").isValid());