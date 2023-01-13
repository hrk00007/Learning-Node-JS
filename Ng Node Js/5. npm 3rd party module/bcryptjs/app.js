const bcrypt = require('bcryptjs');

//user
let user = {
    name: 'Hritik',
    email: 'hritik@gmail.com',
    password: 'hrk@123'
}
//we can't directly store password like this in database we have encrypt that password then store it in database
console.log("\nOriginal User \n", user);

//apply salt
const salt = bcrypt.genSaltSync(10);
let hashedPassword = bcrypt.hashSync(user.password, salt);

//update user
let updatedUser = {
    name: user.name,
    email: user.email,
    password: hashedPassword
}
//store this updatedUser in database
console.log("\nUpdated User \n", updatedUser);

if (bcrypt.compareSync(user.password, updatedUser.password)) {
    console.log("login successful")
} else {
    console.log("Invalid password")
}  