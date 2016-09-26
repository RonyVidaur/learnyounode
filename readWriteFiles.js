let fs = require('fs')
/* this is for reading files
let result = fs.readFileSync('test.txt','utf8')
console.log(result)
writing what we just read from the other file into another
fs.writeFileSync('writeMe.txt', result)

//ASYNC version of the process (non-blocking)
fs.readFile('test2.txt','utf8', (err, data) => {
  fs.writeFile('writeMe.txt',data)
})
--------------------------------------------
delete a file
fs.unlink('test.txt')
*/

//creating directories Sync version
fs.mkdirSync('stuff')
//deleting directories Sync version
fs.rmdirSync('stuff')

//ASYNC version and modifying files
fs.mkdir('stuff',function(){
  fs.readFile('test2.txt','utf8',function(err,data){
    fs.writeFile('./stuff/test.txt')
  })
})
