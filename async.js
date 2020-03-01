var fs = require('fs'),
    async = require('async')

async.waterfall([
    function readData(callback) {
        // console.log(callback)
        fs.readFile('./data/data1.txt', 'utf8', function(err, data) {
            // console.log(data)
            callback(err, data)
        })
    },
    function modify(text, callback) {
        // console.log(text)
        var adjData = text.replace(/somecompany\.com/g, 'burning.net')
        callback(null, adjData)
    },
    function writeData(text, callback) {
        // console.log(text)
        fs.writeFile('./data/data1.txt', text, function(err) {
            callback(err, text)
        })
    }
], function(err, result) {
    if(err) {
        console.log(err.message)
    } else {
        console.log(result)
    }
}
)