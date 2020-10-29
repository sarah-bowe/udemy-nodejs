const fs = require('fs')

const loadData = fs.readFileSync('1-json.json')
const dataString = loadData.toString()
const human = JSON.parse(dataString)

human.name = 'Sarah'
human.age = 30

const humanJSON = JSON.stringify(human)
fs.writeFileSync('1-json.json', humanJSON)