var fib = (n) => {
    if(n < 2) return n;

    return fib(n - 1) + fib(n - 2)
}

class Obj {
    doSomething(arg1_) {
        let callback_ = arguments[arguments.length - 1]
        let callback = ((typeof callback_ === 'function') ? callback_ : null)
        let arg1 = ((typeof arg1_ === 'number') ? arg1_ : null)

        if(!arg1) return callback(new Error('first argument not a number'))

        process.nextTick(() => {
            let data = fib(arg1)
            callback(null, data)
        })
    }
}

let test = new Obj()
let number = 'sdsd'

test.doSomething(number, function(err, data) {
    if(err) {
        console.error(err)
    } else {
        console.log('fibonacci ' + data)
    }
})

console.log('do something')