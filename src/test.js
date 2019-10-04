const bcrypt = require('bcryptjs');

const testmatch = async pass => {
    const bpass = await new bcrypt.hash(pass, 8);
    console.log(bpass);
    const testpass = await bcrypt.compare(pass, bpass);
    console.log(testpass);
};

const r = testmatch('abul');
console.log(r);
console.log('hi');
