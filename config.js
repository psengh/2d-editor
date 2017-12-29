const path = require('path');

const rootPath = path.normalize(`${__dirname}/../..`);
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    root: rootPath,
    port: process.env.PORT || 3000,
    db: {
        host: 'localhost',
        user: 'root'
        // password: 'password'
    }
};