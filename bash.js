const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('promt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim().split(' ');
    switch (cmd[0]) {
        case 'pwd':
                pwd()
                break;
        case 'ls':
                ls()
                break;
        case 'cat':
                cat(cmd[1]);
                break;
        default:
                process.stdout.write('You typed: ' +cmd); 
                break;
    }
    process.stdout.write('\nprompt > ');
})