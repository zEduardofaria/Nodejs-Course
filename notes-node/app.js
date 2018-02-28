console.log('Startgin app');

const fs = require('fs');
const os = require('os');
const _ = require('lodash')

const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('Eduardo'));

const filteredArray = _.uniq(['Eduardo', 1, 2, 3, 3, 2, 5]);
console.log(filteredArray);


// console.log(`Result: ${notes.add(9, -2)}`)

// var user = os.userInfo();

// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);