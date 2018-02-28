console.log('Startgin app');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

console.log(`Result: ${notes.add(9, -2)}`)

// var user = os.userInfo();

// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);