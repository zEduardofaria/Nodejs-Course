console.log('Startgin app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('argv: ', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    console.log(
        note ? 
        `Note created. \n Title: ${argv.title} \n Body: ${argv.body}`
         : 'Note title taken')
} else if (command === 'list') {
    notes.getAll();    
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    console.log(
      noteRemoved ? 
      `Note removed`
       : 'Note not found')
} else {
    console.log('Command not recognize');
}

