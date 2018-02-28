console.log('Starting app.js:');

module.exports.addNote = () => {
    console.log('addNote: ', addNote);
    return 'New note';    
}

module.exports.add = (a, b) => {
    return a + b;
}