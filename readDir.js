const fs = require('fs')
const writeStream = fs.createWriteStream('./log.txt', {
    'flags': 'a',
    'encoding': 'utf8',
    'mode': 0666
})

console.log(require)

writeStream.on('open', function() {
    var o = 0;
    fs.readdir('./data/', function(err, files) {
        if(err) {
            console.log(err)
        } else {
            files.forEach(name => {
                fs.stat('./data/' + name, function(err, stats) {
                    if(err) return err;
                    if(stats.isFile()) {
                        o++;
                        return
                    }
                })
                fs.readFile('./data/' + name, 'utf8', function(err, data) {
                    if(err) {
                        console.log(err.message)
                    } else {
                        var adjData = data.replace(/burningbird\.net/g, 'somecompany.com')

                        fs.writeFile('./data/' + name, adjData, err => {
                            if(err) {
                                console.error(err)
                            } else {
                                writeStream.write('changed ' + name + '\n', 'utf8', function(err) {
                                    if(err) console.error(err.message)

                                    console.log('finished ' + name)
                                    o++;
                                    if(o >= files.length) {
                                        console.log('all done')
                                    }
                                })
                            }
                        })
                    }
                })
            })
        }
    })
})

writeStream.on('error', function(err) {
    console.error('ERROR: ' + err)
})
