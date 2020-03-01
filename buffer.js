let buffer1 = Buffer.from('this is the way we build our buffer')

let lth = buffer1.length

let buffer2 = buffer1.slice(19, lth)
console.log(buffer2.toString())

buffer2.fill('*', 0, 5)
console.log(buffer2.toString())

console.log(buffer1.toString())

console.log(buffer1.compare(buffer2))



