// To take user input from cmd 
/**
 * This method will get complex if you have multi line inputs to fetch and use
 */
process.stdout.write('Enter your name : ');
process.stdin.on('data',(data) => {
  userName = data.toString().trim();
  console.log('input from cmd',data.toString().trim());
  greeting(userName);

  process.exit();
})
let userName ;
function greeting (name) {
  console.log('Good Afternoon',name);
}

