const fs = require('fs')
const process = require('process')

const outFile = process.argv[2]

// We need to prefix the name to be sure we'll get a valid identifier
// (e.g. 23s is not a valid identifier, even though 23s.json is a fine file)
const prefix = name => 'pack_' + name
const buildImportString = name => (
    'import { default as ' + prefix(name) + ' } from "json-data/pack/' + name + '.json"'
)

const packFiles = fs.readdirSync('node_modules/json-data/pack')
const names = packFiles.map(filename => filename.split('.')[0])
const importLines = names.map(buildImportString)
const arrayOfAllImports = '[' + names.map(prefix).join(', ') + ']'

fs.writeFileSync(outFile, (
    "// GENERATED FILE - SEE scripts/collateCardsFromPacks.js\n\n"
    + importLines.join('\n')
    // Build a list of all the card definitions
    + '\n\nconst cardList = [].concat.apply([], ' + arrayOfAllImports + ')'
    // From that, build an object that maps card codes to their objects
    + '\nconst collatedCards = cardList.reduce((cards, card) => {cards[card.code] = card; return cards}, {})'
    + '\nexport default collatedCards\n'
))

console.log('generated ' + outFile + ' from ' + names.length + ' card packs')
