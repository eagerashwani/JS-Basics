
const fileSystem = require('fs');
const path = require('path')


//To read a file 
// let content = fileSystem.readFileSync('mytext.txt');
// //If we not concate data buffer mey aayega
// console.log(''+content);

//if you want a new file (or that doesn't exist) writeFileSync create it
//fileSystem.writeFileSync('f1.txt','Hello from writeFileSync') 

//Append a file -> To update data in file
// fileSystem.appendFileSync('f1.txt', 'Appended data')

//delete a file -> unlinkSync
// fileSystem.unlinkSync('mytext.txt')


/** Directory */

//create
// fileSystem.mkdirSync('New Folder')
// console.log('Folder created')


// Delete a dir
// fileSystem.rmdirSync('New Folder')
// console.log('Folder Removed')

// existSync method let you know that a File/Folder exists or not 
// and it reeturns true or false

// let doesExist = fileSystem.existsSync('myDirectory')
// console.log(doesExist)


// lstatSync
// let stats = fileSystem.lstatSync("f1.txt");
// console.log(stats)

// console.log("isFile?", stats.isFile());
// console.log("isDirectory", stats.isDirectory())


//Copying files from src to dest

let srcFilePath 