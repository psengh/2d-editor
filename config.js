const path = require('path');

const rootPath = path.normalize(`${__dirname}/../..`);
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  root: rootPath,
  port: process.env.PORT || 3000,
  db: {
    url: 'mysql://w8a4wm4a3msl7in9:gz8sfot489cuf6pb@alv4v3hlsipxnujn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/r8hmyrc91k1qhv6k',
    database: 'r8hmyrc91k1qhv6k'
  }
};
