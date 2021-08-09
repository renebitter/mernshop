import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Walter White',
    email: 'heisenberg@saymyna.me',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Gustavo Fring',
    email: 'fring@polloshermanox.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
