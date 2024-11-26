// 1-stdin.js

// Display the welcome message
console.log('Welcome to Holberton School, what is your name?');

// Read the user input
process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data.toString().trim()}\n`);

  // Close the program
  console.log('This important software is now closing');
  process.exit();
});
