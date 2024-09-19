const fs = require('fs');

fs.writeFile('redemption.txt', 'The process of Sanctification', (err) => {
    if (err) throw err;
    console.log('File created and text written!');
});


fs.appendFile('redemption.txt', '\nPilgrim\'s Progress', (err) => {
    if (err) throw err;
    console.log('Text appended to file!');
});


fs.unlink('redemption.txt', (err) => {
    if (err) throw err;
    console.log('File deleted!');
});
