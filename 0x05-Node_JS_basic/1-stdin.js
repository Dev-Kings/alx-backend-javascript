// const readline = require('readline');

// // Create an interface to read input from the command line
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// // Display the message asking for the user's name
// rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
//   // Output the name entered by the user
//   console.log(`Your name is: ${name}`);

//   // Close the readline interface
//   rl.close();

//   // Check if the input is coming from a piped source (not interactive)
//   if (!process.stdin.isTTY) {
//     console.log('This important software is now closing');
//   }
// });

const readline = require('readline');

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask for the user's name
rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  console.log(`Your name is: ${name}`);

  // Only print the closing message if the input was piped, not interactive
  if (!process.stdin.isTTY) {
    console.log('This important software is now closing');
  }

  // Close the readline interface
  rl.close();
});
