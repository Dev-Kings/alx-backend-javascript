const { expect } = require('chai');
const { exec } = require('child_process');

describe('1-stdin.js', () => {
  it('should display name correctly with interactive input', (done) => {
    exec('echo "Bob" | node 1-stdin.js', (err, stdout, stderr) => {
      if (err) {
        done(err);
      }

      // Check the expected output
      expect(stdout).to.include('Welcome to Holberton School, what is your name?');
      expect(stdout).to.include('Your name is: Bob');
      expect(stdout).to.include('This important software is now closing');

      done();
    });
  });

  it('should handle another name input', (done) => {
    exec('echo "John" | node 1-stdin.js', (err, stdout, stderr) => {
      if (err) {
        done(err);
      }

      // Check the expected output
      expect(stdout).to.include('Welcome to Holberton School, what is your name?');
      expect(stdout).to.include('Your name is: John');
      expect(stdout).to.include('This important software is now closing');

      done();
    });
  });

  it('should not display the closing message with interactive input', (done) => {
    exec('node 1-stdin.js', (err, stdout, stderr) => {
      if (err) {
        done(err);
      }

      // Check the expected output without the closing message
      expect(stdout).to.include('Welcome to Holberton School, what is your name?');
      expect(stdout).to.include('Your name is: Bob');
      expect(stdout).not.to.include('This important software is now closing');

      done();
    });
  });
});
