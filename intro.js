const amount = 12

if(amount < 10){
    console.log('small num')
}
else{
    console.log('large num')
}

console.log('hey, its my first node app')

console.log(__dirname)

console.log(__filename)

console.log(require)

console.log(module)

console.log(process)

//setInterval

setInterval(() => {
    console.log('hello world')
},1000)

//OS -- built-in module 

const os = require('os')

//info about current user

const user =os.userInfo()

console.log(user)

console.log(os.hostname())

console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)

//path -- built-in module

const path = require('path')

console.log(path.sep)

const filePath = path.join('/content','subfolder','test.txt')

console.log(filePath)

const base = path.basename(filePath)

console.log(base)

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')

console.log(absolute)

// readFileSync and writeFileSync

const {readFileSync, writeFileSync, read} = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first,second)

writeFileSync('./content/result.txt',
`result is ${first},${second}`, 
//{ flag: 'a'}
)

//readFile and writeFile

const { readFile, writeFile } = require('fs')

console.log('start')
 readFile('./content/first.txt', 
 'utf8', 
 (err,result) => {
if (err) {
    console.log(err)
    return

}
const first =result;
readFile('./content/second.txt','utf8', 
(err, result)=> {
    if (err) {
        console.log(err)
        return
    
    }
    const second =result; 
    writeFile('./content/result-async.txt', 
    `here is the result : ${first}, ${second}`, 
    {flag: 'a'},
    (err, result)=>{
        if (err) {
            console.log(err)
            return
        }   
        console.log(result) 
        console.log('done with the task')

    })
})
}) 
console.log('starting of next task')


