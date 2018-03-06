const db = require('./db');

module.exports = {
  handleSignup(email, password) {
    // Check if email already exists
    db.saveUser({
      email, // same as 'email: email' (ES6 syntax)
      password //same as 'password: password'
    });
    // Send the welcome email
  }
};
