// https://links.mead.io/nodecourse

const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note!')
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

console.log(yargs.argv)