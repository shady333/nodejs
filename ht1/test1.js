var readline = require('readline')

var rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout,
    terminal: false
});

console.log("Welcome!");
console.log("Type 'exit' - to stop");

rl.on('line', (line) => {
    if(line == "exit")
    {
        process.exit();
    }
    else
    {
        console.log(line.split("").reverse().join(""));
    }
})