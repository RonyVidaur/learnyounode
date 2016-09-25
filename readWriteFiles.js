let fs = require('fs')

let result = fs.readFileSync('test.txt','utf8')
console.log(result)
fs.writeFileSync('writeMe.txt', result)

//ASYNC version
fs.readFile('test2.txt','utf8', (err, data) => {
  fs.writeFile('writeMe.txt',data)
})
