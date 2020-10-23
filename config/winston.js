const winston = require ('winston');

// Funcion para guardar los LOGS
const logger = winston.createLogger ({
    transports: [
        new winston.transports.File ({filename: 'logs/combined.log'}),
        new.winston.transports.Console ()
    ],

    format: winston.format.combine (
        winston.format.timestamp (), winston.format.json ()
    ),
    exitOnError: false,
});

logger.stream = {
    write: function (message, encoding) {
        logger.info (message);
    }
}