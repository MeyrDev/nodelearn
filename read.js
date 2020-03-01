const fs = require('fs')

fs.readFile('./orange.txt', 'utf8', function(err, data) {
    console.log(1)
    if(err) {
        console.error(err)
    } else {
        console.log(data)
        var addjData = data.replace(/apple/g, 'orange')
        console.log(addjData)
        fs.writeFile('./orange.txt', addjData, function(err) {
            if(err) console.error(err)
        })
    }
})