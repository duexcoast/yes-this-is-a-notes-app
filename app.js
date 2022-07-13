const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const Notes = require('./notes');
const notes = new Notes();

// const argv = yargs(hideBin(process.argv)).argv;

yargs.command(
  'add',
  'Add a new note',
  {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'The details of the note',
      demandOption: true,
      type: 'string',
    },
  },
  (argv) => {
    notes.addNote(argv.title, argv.body);
  }
);

yargs.command(
  'remove',
  'Remove a note',
  {
    title: {
      describe: 'Note title',
    },
  },
  (argv) => {
    notes.removeNote(argv.title);
  }
);
yargs.command('list', 'List the notes', () => {
  notes.listNotes();
});

// READ COMMAND
yargs.command(
  'read',
  'Read the notes',
  {
    title: {
      describe: 'Note title',
      demandOption: true,
    },
  },
  (argv) => {
    notes.readNote(argv.title);
  }
);
yargs.parse();
