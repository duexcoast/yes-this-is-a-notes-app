const fs = require('fs');
const chalk = require('chalk');

class Notes {
  addNote(title, body) {
    const notes = this.loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
      notes.push({
        title: title,
        body: body,
      });
      this.saveNotes(notes);
      console.log(chalk.bgGreen('New note added!'));
    } else {
      console.log(chalk.bgRed('Note title taken!'));
    }
  }
  removeNote(title) {
    const notes = this.loadNotes();
    const newNotes = notes.filter((note) => note.title !== title);

    if (notes.length === newNotes.length) {
      console.log(chalk.blue.bgRed.bold('No notes found with that title'));
    } else {
      this.saveNotes(newNotes);
      console.log(chalk.bgGreen.bold('Removed', title, 'note'));
    }
  }
  readNote(title) {
    const notes = this.loadNotes();
    const note = notes.find((note) => note.title === title);
    console.log(note.body);
  }
  listNotes() {
    const noteList = this.loadNotes();
    noteList.forEach((note) =>
      console.log(`Title: ${note.title}\n${note.body}`)
    );
  }
  loadNotes() {
    try {
      const dataBuffer = fs.readFileSync('notes.json');
      const dataJSON = dataBuffer.toString();
      return JSON.parse(dataJSON);
    } catch (err) {
      return [];
    }
  }
  saveNotes(notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
  }
}

module.exports = Notes;
