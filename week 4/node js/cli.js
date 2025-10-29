// create a cli which count no of words from a file
const fs = require('fs')
const { Command } = require("commander")
const program = new Command();
program
    .name('count-words')
    .description('CLI to count words in JavaScript')
    .version('0.0.1')
    .argument('<file>', 'file to count words from') 
    .action((file) => { 
fs.readFile(file, "utf-8", (err, data) => {
    if (err) {
        console.log(err.message);
    }
    else {
        const arr = data.trim().split(/\s+/);
        console.log(`Word Count: ${arr.length}`);
    }
})
    })
program.parse();