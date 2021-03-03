const mappings = require('./build/dist/mappings/lib/index').default
const fs = require('fs');

fs.writeFileSync(__dirname + "/build/mappings.json", JSON.stringify(mappings, null, 3));