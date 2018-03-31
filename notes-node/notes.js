console.log("Starting notes.js:");

const fs = require('fs');

const fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  } 
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  console.log("Getting all notes");
};

var getNote = title => {
  var notes = fetchNotes();
  var filteredNote = notes.filter((note) => note.title === title);
  return filteredNote[0]
};

var removeNote = title => {
  var notes = fetchNotes();
  var newNotes = []
  var filteredNote = notes.filter((note) => note.title !== title);
  saveNotes(filteredNote);

  return notes.length !== filteredNote.length
};

var logNote = (note) => `Note found. \n Title: ${note.title} \n Body: ${note.body}`

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
 