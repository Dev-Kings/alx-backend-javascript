const { expect } = require('chai');
const { exec } = require('child_process');

describe('1-stdin.js', () => {
  it('should print the correct name after user input', (done) => {
    // Simulate user input using echo and pipe it to the node process
    exec('echo "Bob" | node 1-stdin.js', (err, stdout, stderr) => {
      if (err) {
        done(err); // If there's an error, fail the test
      }

      // Check the expected output
      expect(stdout).to.include('Welcome to Holberton School, what is your name?');
      expect(stdout).to.include('Your name is: Bob');
      expect(stdout).to.include('This important software is now closing');

      done(); // Test is complete
    });
  });

  it('should handle another name input', (done) => {
    // Test with a different name input
    exec('echo "Alice" | node 1-stdin.js', (err, stdout, stderr) => {
      if (err) {
        done(err); // If there's an error, fail the test
      }

      // Check the expected output
      expect(stdout).to.include('Welcome to Holberton School, what is your name?');
      expect(stdout).to.include('Your name is: Alice');
      expect(stdout).to.include('This important software is now closing');

      done(); // Test is complete
    });
  });
});
