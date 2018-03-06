const fs = require('fs')
const pkg = require('../package.json');

module.exports = function (done) {
	let str = `{
		"name": "${pkg.name}",
		"version": "${pkg.version}",
		"description": "${pkg.description}",
		"main": "server.js",
		"start": "node ./server.js",
		"dependencies": ${JSON.stringify(pkg.dependencies)}
	}`
	fs.writeFile('./dist/package.json', str, done)
}