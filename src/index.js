

require('dotenv').config();



let env = require('./boot/env'),
    server = require('./boot/server'),
    logger = require('./server/utils/logger');

server.load().then(() => {
    logger.success('Server is running on port: ' + env.vars.SERVER_PORT);
});

