import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Joseph Joestar',
    email: 'jojo@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Dio Brando',
    email: 'dio@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
