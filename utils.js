"use strict"

// const util = require('util')
const eventEmitter = require('events').EventEmitter
const fs = require('fs')

class InputChecker extends eventEmitter {
    constructor(name, file) {
        super()
        this.name = name;
        this.writeStream = fs.createWriteStream(`./${file}.txt`, {
            'flags': 'a',
            'encoding': 'utf8',
            'mode': 0o666
        })
    }

    check(input) {
        console.log(input)
        let command = input.trim().substr(0, 3)
        if(command === 'wr:') {
            console.log(1)
            this.emit('write', input.substr(3, input.length))
        } else if(command === 'en:') {
            console.log(2)
            this.emit('end')
        } else {
            console.log(3)
            this.emit('echo', input)
        }
    }
}

let ic = new InputChecker('Shelley', 'output')

ic.on('write', function(data) {
    this.writeStream.write(data, 'utf8')
})

ic.on('echo', function(data) {
    process.stdout.write(`${ic.name} wrote ${data}`)
})

ic.on('end', function(data) {
    process.exit()
})

process.stdin.setEncoding('utf8')
process.stdin.on('readable', function() {
    let input = process.stdin.read()
    if(input !== null) {
        ic.check(input)
    }
})