const bcrypt = require('bcryptjs');

// const salt = bcrypt.genSaltSync(10);

// console.log(salt);

const password = 'secret';

// const hashedPassword = bcrypt.hashSync(password, salt);

// console.log(hashedPassword);

// const storedHash = '$2a$10$0y5Odfv.0BWJhYlh2gB8me7DB9BTSYtQz48drZAQGPPgTNHf5.xY.';

// const result = bcrypt.compareSync('secret', storedHash);
// console.log('result', result);

bcrypt.genSalt(10, (err, salt) => {
  console.log('salt', salt);
  bcrypt.hash(password, salt, (err, hash) => {
    console.log('hash', hash);
  });
});
