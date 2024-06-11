process.stdin.setEncoding('utf8');// If there is no encoding, return Code Number
process.stdin.on('data', (data) => {
    console.log('You entere: ', data);
    process.stdin.end();
})

console.log('enter your data');