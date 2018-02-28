console.log('Startgin app');

const fs = require('fs');
const _ = require('lodash')

const notes = require('./notes.js');

var command = ProcessingInstruction.argv[2];
console.log('command: ', command);

if (command === 'add') {
    console.log('Adding new note');
} else if (command === 'list') {
    console.log('Listing all notes');    
} else if (command === 'read') {
    console.log('Reading note');
} else if (command === 'remove') {
    console.log('Removing note');
} else {
    console.log('Command not recognize');
}

