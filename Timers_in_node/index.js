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