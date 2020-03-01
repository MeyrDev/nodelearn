var fs = require('fs'),
    async = require('async'),
    _dir = './data'

var writeStream = fs.createWriteStream('./log.txt', {
    'flags': 'a',
    'encoding': 'utf8',
    'mode' : 0666
})

async.waterfall([
    function readDir(callback) {
        fs.readdir(_dir, function(err, files) {
            callback(err, files)
        })
    },
    function loopFiles(files, callback) {
        console.log(files)
        files.forEach(function(name) {
            callback(null, name)
        })
    },
    function checkfile(file, callback) {
        fs.stat(_dir + file, function(err, stats) {
            console.log(stats)
            callback(err, stats, file)
        })
    },
    function readData(stats, file, callback) {
        if(stats.isFile) {
            fs.readFile(_dir + file, 'utf8', function(err, data) {
                callback(err, file, data)
            })
        }
    },
    function modify(file, text, callback) {
        var addData = text.replace(/somecompany\.com/g, 'burningbird.net')
        callback(null, file, addData)
    },
    function writeData(file, text, callback) {
        fs.writeFile(_dir + file, text, function(err) {
            callback(err, file)
        })
    },
    function changeLog(file, callback) {
        writeStream.write('changed ' + file + '\n', 'utf8', function(err) {
            callback(err)
        })
    },
], function(err) {
    if(err) {
        console.error(err.message)
    } else {
        console.log('modified files')
    }
})