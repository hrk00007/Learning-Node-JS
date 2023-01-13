const jwt = require('jsonwebtoken');

//user
let user = {
    id: 'hrk_007',
    name: 'Hritik Manbattulwar',
    email: 'hrk_007@gmail.com'
}

//create a token(payload,secretkey,expiresIn)
let payload = {
    id: user.id,
    name: user.name
}
let secretkey = 'fdkhier23kjdsf' //random numbers

let token = jwt.sign(payload, secretkey, { expiresIn: 60 * 60 });
console.log(token, "\n");

//verify the token
jwt.verify(token, secretkey, (err, decoded) => {
    if (err) throw err;
    console.log(decoded);
})