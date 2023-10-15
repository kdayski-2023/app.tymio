const fs = require('fs');
const packageJson = require('../package.json');

const versionParts = packageJson.version.split('.');
versionParts[2] = parseInt(versionParts[2]) + 1;
packageJson.version = versionParts.join('.');

fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
