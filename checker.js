process.stdin.setEncoding('utf8');

process.stdin.on('readable', function(){
    var input = process.stdin.read()

    if(input !== null) {
        process.stdout.write(input)
        var command = input.trim()
        console.log('command --- ', command)
        if(command == 'exit' ) {
            process.exit(0)
        }
    }
})