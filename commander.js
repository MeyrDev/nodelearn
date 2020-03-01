const commander = require('commander')

commander
    .version('0.0.1')
    .version('-s, --source[web site]', 'source web site')
    .version('-f --file [file name]', 'File name')
    .parse(process.argv)

console.log(commander.source)
console.log(commander.file)