const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    console.log(
        note ? 
        notes.logNote(note)
         : 'Note title taken')
} else if (command === 'list') {
    var allNotes = notes.getAll();    
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note))
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    console.log(
      note ? 
      notes.logNote(note)
       : 'Note not found')
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    console.log(
      noteRemoved ? 
      `Note removed`
       : 'Note not found')
} else {
    console.log('Command not recognize');
}

