var fs = require('fs'),
    async = require('async')

async.parallel({
    data1(callback) {
        fs.readFile('./data/fruit1.txt', 'utf8', function(err, data) {
            callback(err, data)
        })
    },
    data2(callback) {
        fs.readFile('./data/fruit2.txt', 'utf8', function(err, data) {
            callback(err, data)
        })
    },
    data3(callback) {
        fs.readFile('./data/fruit3.txt', 'utf8', function(err, data) {
            callback(err, data)
        })
    }
}, function(err, result) {
    if(err) {
        console.error(err.message)
    } else {
        console.log(result)
    }
})