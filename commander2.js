const program = require('commander')

program
    .version('0.0.1')
    .command('keyword <keywork> [otherKeywords...]')
    .action(function(keyword, otherKeywords) {
        console.log('keywords %s', keyword)
        if(otherKeywords) {
            otherKeywords.forEach(function(key) {
                console.log('keywords %s', key)
            })
        }
    })

program.parse(process.argv)