// https://links.mead.io/nodecourse

const chalk = require('chalk')
const yargs = require('yargs')
const notesUtils = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note main content',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notesUtils.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'rm',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note.')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        console.log('Here is a list of your notes:')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read an individual note',
    handler: function () {
        console.log('This is a note.')
    }
})

yargs.parse()